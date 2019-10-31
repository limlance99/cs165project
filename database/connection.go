package database

import (
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres" // for postgres
)

// Db is the pointer to our database
var Db *gorm.DB

// Connect to the database
func Connect() {
	var err error

	dbURL := os.Getenv("DATABASE_URL")

	Db, err = gorm.Open("postgres", dbURL)

	if err != nil {
		panic(err)
	}
	Db.AutoMigrate(
		&restrictions{},
		&conditions{},
		&resandconds{},
		&bodytype{},
		&personaldetails{},
		&familyrelations{},
		&nationality{},
		&personinformation{},
		&businesses{},
		&civilstatus{},
		&dlaf{},
	)
}
