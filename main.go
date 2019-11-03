package main

import (
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/limlance99/cs165api/database"
)

func main() {
	database.Connect()
	defer database.Db.Close()

	router := echo.New()
	router.Use(middleware.Logger())
	router.Use(middleware.Recover())
	router.Use(middleware.CORS())

	router.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		Skipper: middleware.DefaultSkipper,
		Root:    "public",
		HTML5:   true,
	}))

	api := router.Group("/api")
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
		api.GET("/easteregg", func(c echo.Context) error {
			return c.String(200, "Save the turtles!")
		})
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "1323"
	}

	router.Logger.Fatal(router.Start(":" + port))
}
