package database

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// setErrorMessage is used to return errors when not found
func setErrorMessage(c *gin.Context) {
	c.JSON(
		http.StatusNotFound,
		gin.H{
			"status":  http.StatusNotFound,
			"message": "nothing found",
		},
	)
}

// returnData back to the request
func returnData(c *gin.Context, data interface{}) {
	c.JSON(
		http.StatusOK,
		gin.H{
			"status": http.StatusOK,
			"data":   data,
		},
	)
}

// GetRestrictions gets all the restrictions
func GetRestrictions(c *gin.Context) {
	var restricts []restrictions

	Db.Find(&restricts)

	if len(restricts) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, restricts)
}

// GetConditions gets all the conditions
func GetConditions(c *gin.Context) {
	var conds []conditions

	Db.Find(&conds)

	if len(conds) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, conds)
}

// GetResAndConds gets all the combinations of res and conds
func GetResAndConds(c *gin.Context) {
	var randcs []resandconds

	Db.Find(&randcs)

	if len(randcs) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, randcs)
}

// GetBodyType gets all the body types
func GetBodyType(c *gin.Context) {
	var bodytypes []bodytype

	Db.Find(&bodytypes)

	if len(bodytypes) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, bodytypes)
}

// GetPersonalDetails gets all the details of a person
func GetPersonalDetails(c *gin.Context) {
	var pdetails []personaldetails

	Db.Find(&pdetails)

	if len(pdetails) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, pdetails)
}

// GetFamilyRelations gets all the relationships with family
func GetFamilyRelations(c *gin.Context) {
	var relations []familyrelations

	Db.Find(&relations)

	if len(relations) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, relations)
}

// GetNationality gets the nationalities
func GetNationality(c *gin.Context) {
	var nationalities []nationality

	Db.Find(&nationalities)

	if len(nationalities) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, nationalities)
}

// GetPersonInformation gets all the info of persons
func GetPersonInformation(c *gin.Context) {
	var infos []personinformation

	Db.Find(&infos)

	if len(infos) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, infos)
}

// GetBusinesses gets all the business details
func GetBusinesses(c *gin.Context) {
	var business []businesses

	Db.Find(&business)

	if len(business) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, business)
}

// GetCivilStatus gets all the Civil Statuses
func GetCivilStatus(c *gin.Context) {
	var statuses []civilstatus

	Db.Find(&statuses)

	if len(statuses) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, statuses)
}

// GetDLAF gets all the forms
func GetDLAF(c *gin.Context) {
	var forms []dlaf

	Db.Find(&forms)

	if len(forms) <= 0 {
		setErrorMessage(c)
		return
	}

	returnData(c, forms)
}

// GetOneDLAF gets one form
func GetOneDLAF(c *gin.Context) {
	var form dlaf
	appNo := c.Param("id")

	Db.Where("appno = ?", appNo).First(&form)
	if form.AppNo == 0 {
		setErrorMessage(c)
		return
	}
	returnData(c, form)
}
