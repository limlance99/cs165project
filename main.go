package main

import (
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/limlance99/cs165api/database"
)

func main() {
	database.Connect()
	defer database.Db.Close()

	router := gin.Default()
	router.Use(cors.Default())

	// place all vue routes here
	router.Use(static.Serve("/routes", static.LocalFile("./public", true)))
	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	api := router.Group("/api/")
	{
		api.GET("/restrictions", database.GetRestrictions)
		api.GET("/conditions", database.GetConditions)
		api.GET("/resandconds", database.GetResAndConds)
		api.GET("/bodytype", database.GetBodyType)
		api.GET("/personaldetails", database.GetPersonalDetails)
		api.GET("/familyrelations", database.GetFamilyRelations)
		api.GET("/nationality", database.GetNationality)
		api.GET("/personinformation", database.GetPersonInformation)
		api.GET("/businesses", database.GetBusinesses)
		api.GET("/civilstatus", database.GetCivilStatus)
		api.GET("/dlaf/:id", database.GetOneDLAF)
		api.GET("/dlaf", database.GetDLAF)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	router.Run(":" + port)
}
