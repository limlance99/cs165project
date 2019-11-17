package database

type (
	restrictions struct {
		ResCode string `json:"rescode" gorm:"column:rescode"`
		IsRes1  bool   `json:"isres1" gorm:"column:isres1"`
		IsRes2  bool   `json:"isres2" gorm:"column:isres2"`
		IsRes3  bool   `json:"isres3" gorm:"column:isres3"`
		IsRes4  bool   `json:"isres4" gorm:"column:isres4"`
		IsRes5  bool   `json:"isres5" gorm:"column:isres5"`
		IsRes6  bool   `json:"isres6" gorm:"column:isres6"`
		IsRes7  bool   `json:"isres7" gorm:"column:isres7"`
		IsRes8  bool   `json:"isres8" gorm:"column:isres8"`
	}

	conditions struct {
		CondCode string `json:"condcode" gorm:"column:condcode"`
		IsA      bool   `json:"isa" gorm:"column:isa"`
		IsB      bool   `json:"isb" gorm:"column:isb"`
		IsC      bool   `json:"isc" gorm:"column:isc"`
		IsD      bool   `json:"isd" gorm:"column:isd"`
		IsE      bool   `json:"ise" gorm:"column:ise"`
	}

	resandconds struct {
		LicenseNo string `json:"licenseno" gorm:"column:licenseno"`
		ResCode   string `json:"rescode" gorm:"column:rescode"`
		CondCode  string `json:"condcode" gorm:"column:condcode"`
	}

	bodytype struct {
		Height float32 `json:"height" gorm:"column:height"`
		Weight float32 `json:"weight" gorm:"column:weight"`
		Built  string  `json:"built" gorm:"column:built"`
	}

	personaldetails struct {
		PDID         int     `json:"pdid" gorm:"column:pdid"`
		BloodType    string  `json:"bloodtype" gorm:"column:bloodtype"`
		Hair         string  `json:"hair" gorm:"column:hair"`
		Eyes         string  `json:"eyes" gorm:"column:eyes"`
		Complexion   string  `json:"complexion" gorm:"column:complexion"`
		Height       float32 `json:"height" gorm:"column:height"`
		Weight       float32 `json:"weight" gorm:"column:weight"`
		IsOrganDonor bool    `json:"isorgandonor" gorm:"column:isorgandonor"`
	}

	familyrelations struct {
		TIN    string `json:"tin" gorm:"column:tin"`
		PDID   int    `json:"pdid" gorm:"column:pdid"`
		Father string `json:"father" gorm:"column:father"`
		Mother string `json:"mother" gorm:"column:mother"`
		Spouse string `json:"spouse" gorm:"column:spouse"`
	}

	nationality struct {
		Birthplace  string `json:"birthplace" gorm:"column:birthplace"`
		Nationality string `json:"nationality" gorm:"column:nationality"`
	}

	personinformation struct {
		TIN        string `json:"tin" gorm:"column:tin"`
		FullName   string `json:"fullname" gorm:"column:fullname"`
		PresAdd    string `json:"presadd" gorm:"column:pressadd"`
		Gender     string `json:"gender" gorm:"column:gender"`
		BirthDate  string `json:"birthdate" gorm:"column:birthdate"`
		TCPNo      string `json:"tcpno" gorm:"column:tcpno"`
		Birthplace string `json:"birthplace" gorm:"column:birthplace"`
	}

	businesses struct {
		BusinessName string `json:"businessname" gorm:"column:businessname;PRIMARY_KEY"`
		BusinessNo   string `json:"businessno" gorm:"column:businessno"`
		BusinessAdd  string `json:"businessadd" gorm:"column:businessadd"`
	}

	civilstatus struct {
		FullName    string `json:"fullname" gorm:"column:fullname"`
		Spouse      string `json:"spouse" gorm:"column:spouse"`
		CivilStatus string `json:"civilstatus" gorm:"column:civilstatus"`
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
)

func (restrictions) TableName() string {
	return "restrictions"
}

func (conditions) TableName() string {
	return "conditions"
}

func (resandconds) TableName() string {
	return "resandconds"
}

func (bodytype) TableName() string {
	return "bodytype"
}

func (personaldetails) TableName() string {
	return "personaldetails"
}

func (familyrelations) TableName() string {
	return "familyrelations"
}

func (nationality) TableName() string {
	return "nationality"
}

func (personinformation) TableName() string {
	return "personinformation"
}

func (businesses) TableName() string {
	return "businesses"
}

func (civilstatus) TableName() string {
	return "civilstatus"
}

func (dlaf) TableName() string {
	return "dlaf"
}
