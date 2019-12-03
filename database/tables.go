package database

type (
	resandconds struct {
		LicenseNo string `json:"licenseno" gorm:"column:licenseno"`
		ResCode   string `json:"rescode" gorm:"column:rescode"`
		CondCode  string `json:"condcode" gorm:"column:condcode"`
	}

	personaldetails struct {
		PDID         int     `json:"pdid" gorm:"column:pdid"`
		BloodType    string  `json:"bloodtype" gorm:"column:bloodtype"`
		Hair         string  `json:"hair" gorm:"column:hair"`
		Eyes         string  `json:"eyes" gorm:"column:eyes"`
		Complexion   string  `json:"complexion" gorm:"column:complexion"`
		Height       float32 `json:"height" gorm:"column:height"`
		Weight       float32 `json:"weight" gorm:"column:weight"`
		Built        string  `json:"built" gorm:"column:built"`
		IsOrganDonor bool    `json:"isorgandonor" gorm:"column:isorgandonor"`
	}

	familyrelations struct {
		TIN         string `json:"tin" gorm:"column:tin"`
		PDID        int    `json:"pdid" gorm:"column:pdid"`
		Father      string `json:"father" gorm:"column:father"`
		Mother      string `json:"mother" gorm:"column:mother"`
		Spouse      string `json:"spouse" gorm:"column:spouse"`
		CivilStatus string `json:"civilstatus" gorm:"column:civilstatus"`
	}

	personinformation struct {
		TIN         string `json:"tin" gorm:"column:tin"`
		FullName    string `json:"fullname" gorm:"column:fullname"`
		PresAdd     string `json:"presadd" gorm:"column:pressadd"`
		Gender      string `json:"gender" gorm:"column:gender"`
		BirthDate   string `json:"birthdate" gorm:"column:birthdate"`
		TCPNo       string `json:"tcpno" gorm:"column:tcpno"`
		Birthplace  string `json:"birthplace" gorm:"column:birthplace"`
		Nationality string `json:"nationality" gorm:"column:nationality"`
	}

	businesses struct {
		BusinessName string `json:"businessname" gorm:"column:businessname;PRIMARY_KEY"`
		BusinessNo   string `json:"businessno" gorm:"column:businessno"`
		BusinessAdd  string `json:"businessadd" gorm:"column:businessadd"`
	}

	dlaf struct {
		AppNo        int    `json:"appno" gorm:"column:appno"`
		PDID         int    `json:"pdid" gorm:"column:pdid"`
		TIN          string `json:"tin" gorm:"column:tin"`
		LicenseNo    string `json:"licenseno" gorm:"column:licenseno"`
		TOA          string `json:"toa" gorm:"column:toa"`
		TLA          string `json:"tla" gorm:"column:tla"`
		DSA          string `json:"dsa" gorm:"column:dsa"`
		EA           string `json:"ea" gorm:"column:ea"`
		BusinessName string `json:"businessname" gorm:"column:businessname"`
		PrevName     string `json:"prevname" gorm:"column:prevname"`
	}

	peoplejobs struct {
		Licenseno    string `json:"licenseno" gorm:"column:licenseno"`
		Fullname     string `json:"fullname" gorm:"column:fullname"`
		Businessname string `json:"businessname" gorm:"column:businessname"`
		Businessno   string `json:"businessno" gorm:"column:businessno"`
	}
)

func (resandconds) TableName() string {
	return "resandconds"
}

func (personaldetails) TableName() string {
	return "personaldetails"
}

func (familyrelations) TableName() string {
	return "familyrelations"
}

func (personinformation) TableName() string {
	return "personinformation"
}

func (businesses) TableName() string {
	return "businesses"
}

func (dlaf) TableName() string {
	return "dlaf"
}

func (peoplejobs) TableName() string {
	return "peoplejobs"
}
