package database

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetRestrictions gets all the restrictions
func GetRestrictions(c *gin.Context) {
	var restricts []restrictions

	Db.Find(&restricts)

	if len(restricts) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   restricts,
		},
	)
}

// GetConditions gets all the conditions
func GetConditions(c *gin.Context) {
	var conds []conditions

	Db.Find(&conds)

	if len(conds) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   conds,
		},
	)
}

// GetResAndConds gets all the combinations of res and conds
func GetResAndConds(c *gin.Context) {
	var randcs []resandconds

	Db.Find(&randcs)

	if len(randcs) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   randcs,
		},
	)
}

// GetBodyType gets all the body types
func GetBodyType(c *gin.Context) {
	var bodytypes []bodytype

	Db.Find(&bodytypes)

	if len(bodytypes) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   bodytypes,
		},
	)
}

// GetPersonalDetails gets all the details of a person
func GetPersonalDetails(c *gin.Context) {
	var pdetails []personaldetails

	Db.Find(&pdetails)

	if len(pdetails) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   pdetails,
		},
	)
}

// GetFamilyRelations gets all the relationships with family
func GetFamilyRelations(c *gin.Context) {
	var relations []familyrelations

	Db.Find(&relations)

	if len(relations) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   relations,
		},
	)
}

// GetNationality gets the nationalities
func GetNationality(c *gin.Context) {
	var nationalities []nationality

	Db.Find(&nationalities)

	if len(nationalities) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   nationalities,
		},
	)
}

// GetPersonInformation gets all the info of persons
func GetPersonInformation(c *gin.Context) {
	var infos []personinformation

	Db.Find(&infos)

	if len(infos) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   infos,
		},
	)
}

// GetBusinesses gets all the business details
func GetBusinesses(c *gin.Context) {
	var business []businesses

	Db.Find(&business)

	if len(business) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries yet",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   business,
		},
	)
}

// GetCivilStatus gets all the Civil Statuses
func GetCivilStatus(c *gin.Context) {
	var statuses []civilstatus

	Db.Find(&statuses)

	if len(statuses) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   statuses,
		},
	)
}

// GetDLAF gets all the forms
func GetDLAF(c *gin.Context) {
	var forms []dlaf

	Db.Find(&forms)

	if len(forms) <= 0 {
		c.JSON(
			http.StatusNotFound,
			gin.H{
				"status":  http.StatusNotFound,
				"message": "no entries",
			},
		)
		return
	}

	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   forms,
		},
	)
}
