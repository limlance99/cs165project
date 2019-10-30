package main

import (
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/limlance99/cs165api/database"
)

func main() {
	database.Connect()
	defer database.Db.Close()

	router := gin.Default()
	router.Use(cors.Default())

	v1 := router.Group("/api/")
	{
		v1.GET("/restrictions", database.GetRestrictions)
		v1.GET("/conditions", database.GetConditions)
		v1.GET("/resandconds", database.GetResAndConds)
		v1.GET("/bodytype", database.GetBodyType)
		v1.GET("/personaldetails", database.GetPersonalDetails)
		v1.GET("/familyrelations", database.GetFamilyRelations)
		v1.GET("/nationality", database.GetNationality)
		v1.GET("/personinformation", database.GetPersonInformation)
		v1.GET("/businesses", database.GetBusinesses)
		v1.GET("/civilstatus", database.GetCivilStatus)
		v1.GET("/dlaf", database.GetDLAF)
	}

	if err := godotenv.Load(); err != nil {
		panic(err)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	router.Run(":" + port)
}
