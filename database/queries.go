package database

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo"
)

type errorMessage struct {
	Message string `json:"message"`
}

// H is a thing that lets me send data
type H map[string]interface{}

// setErrorMessage is used to return errors when not found
func setErrorMessage(c echo.Context) error {
	message := &errorMessage{
		Message: "Nothing Found",
	}
	return c.JSON(http.StatusNotFound, message)
}

// returnData back to the request
func returnData(c echo.Context, data interface{}) error {
	return c.JSONPretty(
		http.StatusOK,
		data,
		"   ",
	)
}

// GetRestrictions gets all the restrictions
func GetRestrictions(c echo.Context) error {
	var restricts []restrictions

	Db.Find(&restricts)

	if len(restricts) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, restricts)
}

// GetConditions gets all the conditions
func GetConditions(c echo.Context) error {
	var conds []conditions

	Db.Find(&conds)

	if len(conds) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, conds)
}

// GetResAndConds gets all the combinations of res and conds
func GetResAndConds(c echo.Context) error {
	var randcs []resandconds

	Db.Find(&randcs)

	if len(randcs) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, randcs)
}

// GetBodyType gets all the body types
func GetBodyType(c echo.Context) error {
	var bodytypes []bodytype

	Db.Find(&bodytypes)

	if len(bodytypes) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, bodytypes)
}

// GetPersonalDetails gets all the details of a person
func GetPersonalDetails(c echo.Context) error {
	var pdetails []personaldetails

	Db.Find(&pdetails)

	if len(pdetails) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, pdetails)
}

// GetFamilyRelations gets all the relationships with family
func GetFamilyRelations(c echo.Context) error {
	var relations []familyrelations

	Db.Find(&relations)

	if len(relations) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, relations)
}

// GetNationality gets the nationalities
func GetNationality(c echo.Context) error {
	var nationalities []nationality

	Db.Find(&nationalities)

	if len(nationalities) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, nationalities)
}

// GetPersonInformation gets all the info of persons
func GetPersonInformation(c echo.Context) error {
	var infos []personinformation

	Db.Find(&infos)

	if len(infos) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, infos)
}

// GetBusinesses gets all the business details
func GetBusinesses(c echo.Context) error {
	var business []businesses
	var count int
	Db.Find(&business).Count(&count)

	if len(business) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, H{
		"data":  business,
		"count": count,
	})
}

// PostBusiness posts a new row for businesses
func PostBusiness(c echo.Context) error {
	body := businesses{}
	c.Bind(&body)

	duplicateCheck := businesses{}
	Db.Where("businessname = ?", body.BusinessName).Find(&duplicateCheck)
	if duplicateCheck.BusinessName != "" {
		message := &errorMessage{
			Message: "Already exists!",
		}
		return c.JSON(http.StatusConflict, message)
	}

	Db.Create(&body)
	return returnData(c, body)
}

// UpdateBusiness updates the details of a business
func UpdateBusiness(c echo.Context) error {
	body := businesses{}
	business := businesses{}
	c.Bind(&body)
	// Db.Where("businessname=?", body.BusinessName).First(&business).Update(Db.Model())
	// Db.Save(&business)
	Db.Model(&business).Updates(body)

	return returnData(c, body)
}

// DeleteBusiness deletes a business
func DeleteBusiness(c echo.Context) error {
	businessName := c.Param("businessname")
	business := businesses{
		BusinessName: businessName,
	}
	Db.Delete(&business)
	return returnData(c, business)
}

// GetCivilStatus gets all the Civil Statuses
func GetCivilStatus(c echo.Context) error {
	var statuses []civilstatus

	Db.Find(&statuses)

	if len(statuses) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, statuses)
}

// GetDLAF gets all the forms
func GetDLAF(c echo.Context) error {
	var forms []dlaf

	Db.Find(&forms)

	if len(forms) <= 0 {
		return setErrorMessage(c)
	}

	return returnData(c, forms)
}

// GetOneDLAF gets one form
func GetOneDLAF(c echo.Context) error {
	var form dlaf
	appNo := c.Param("id")

	fmt.Println("I got here")

	Db.Where("appno = ?", appNo).First(&form)
	if form.AppNo == 0 {
		return setErrorMessage(c)
	}
	fmt.Println(form)
	return returnData(c, form)
}
