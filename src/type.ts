

export interface IData {
    fileGenerationDate: string
    Entity: IEntity
    NameAlias: INameAlias
    Address: IAddress
    BirthDate: IBirthDate
    Identification: IIdentification
    Citizenship: ICitizenship
}
export interface IDataUnique {
    fileGenerationDate: string
    Entity: IEntity
    NameAlias: INameAlias[]
    Address: IAddress[]
    BirthDate: IBirthDate[]
    Identification: IIdentification[]
    Citizenship: ICitizenship[]
}

export interface IEntity {
    LogicalId: string
    EU_ReferenceNumber: string
    UnitedNationId: string
    DesignationDate: string
    DesignationDetails: string
    Remark: string
    SubjectType: string
    SubjectType_ClassificationCode: string
    Regulation: IRegulation
}
export interface INameAlias {
    LastName: string
    FirstName: string
    MiddleName: string
    WholeName: string
    NameLanguage: string
    Gender: string
    Title: string
    Function: string
    LogicalId: string
    RegulationLanguage: string
    Remark: string
    Regulation: IRegulation
}

export interface IRegulation {
    Type: string
    OrganisationType: string
    PublicationDate: string
    EntryIntoForceDate: string
    NumberTitle: string
    Programme: string
    PublicationUrl: string
}
export interface IAddress {
    City: string
    Street: string
    PoBox: string
    ZipCode: string
    Region: string
    Place: string
    AsAtListingTime: string
    ContactInfo: string
    CountryIso2Code: string
    CountryDescription: string
    LogicalId: string
    RegulationLanguage: string
    Remark: string
    Regulation: IRegulation
}
export interface IBirthDate {
    BirthDate: string
    Day: string
    Month: string
    Year: string
    YearRangeFrom: string
    YearRangeTo: string
    Circa: string
    CalendarType: string
    ZipCode: string
    Region: string
    Place: string
    City: string
    CountryIso2Code: string
    CountryDescription: string
    LogicalId: string
    RegulationLanguage: string
    Remark: string
    Regulation: IRegulation
}
export interface IIdentification {
    Number: string
    Diplomatic: string
    KnownExpired: string
    KnownFalse: string
    ReportedLost: string
    RevokedByIssuer: string
    IssuedBy: string
    IssuedDate: string
    ValidFrom: string
    ValidTo: string
    LatinNumber: string
    NameOnDocument: string
    TypeCode: string
    TypeDescription: string
    Region: string
    CountryIso2Code: string
    CountryDescription: string
    LogicalId: string
    RegulationLanguage: string
    Remark: string
    Regulation: IRegulation
}
export interface ICitizenship {
    Region: string
    CountryIso2Code: string
    CountryDescription: string
    LogicalId: string
    RegulationLanguage: string
    Remark: string
    Regulation: IRegulation
}

export interface IRawData {
    fileGenerationDate: string
    Entity_LogicalId: string
    Entity_EU_ReferenceNumber: string
    Entity_UnitedNationId: string
    Entity_DesignationDate: string
    Entity_DesignationDetails: string
    Entity_Remark: string
    Entity_SubjectType: string
    Entity_SubjectType_ClassificationCode: string
    Entity_Regulation_Type: string
    Entity_Regulation_OrganisationType: string
    Entity_Regulation_PublicationDate: string
    Entity_Regulation_EntryIntoForceDate: string
    Entity_Regulation_NumberTitle: string
    Entity_Regulation_Programme: string
    Entity_Regulation_PublicationUrl: string
    NameAlias_LastName: string
    NameAlias_FirstName: string
    NameAlias_MiddleName: string
    NameAlias_WholeName: string
    NameAlias_NameLanguage: string
    NameAlias_Gender: string
    NameAlias_Title: string
    NameAlias_Function: string
    NameAlias_LogicalId: string
    NameAlias_RegulationLanguage: string
    NameAlias_Remark: string
    NameAlias_Regulation_Type: string
    NameAlias_Regulation_OrganisationType: string
    NameAlias_Regulation_PublicationDate: string
    NameAlias_Regulation_EntryIntoForceDate: string
    NameAlias_Regulation_NumberTitle: string
    NameAlias_Regulation_Programme: string
    NameAlias_Regulation_PublicationUrl: string
    Address_City: string
    Address_Street: string
    Address_PoBox: string
    Address_ZipCode: string
    Address_Region: string
    Address_Place: string
    Address_AsAtListingTime: string
    Address_ContactInfo: string
    Address_CountryIso2Code: string
    Address_CountryDescription: string
    Address_LogicalId: string
    Address_RegulationLanguage: string
    Address_Remark: string
    Address_Regulation_Type: string
    Address_Regulation_OrganisationType: string
    Address_Regulation_PublicationDate: string
    Address_Regulation_EntryIntoForceDate: string
    Address_Regulation_NumberTitle: string
    Address_Regulation_Programme: string
    Address_Regulation_PublicationUrl: string
    BirthDate_BirthDate: string
    BirthDate_Day: string
    BirthDate_Month: string
    BirthDate_Year: string
    BirthDate_YearRangeFrom: string
    BirthDate_YearRangeTo: string
    BirthDate_Circa: string
    BirthDate_CalendarType: string
    BirthDate_ZipCode: string
    BirthDate_Region: string
    BirthDate_Place: string
    BirthDate_City: string
    BirthDate_CountryIso2Code: string
    BirthDate_CountryDescription: string
    BirthDate_LogicalId: string
    BirthDate_RegulationLanguage: string
    BirthDate_Remark: string
    BirthDate_Regulation_Type: string
    BirthDate_Regulation_OrganisationType: string
    BirthDate_Regulation_PublicationDate: string
    BirthDate_Regulation_EntryIntoForceDate: string
    BirthDate_Regulation_NumberTitle: string
    BirthDate_Regulation_Programme: string
    BirthDate_Regulation_PublicationUrl: string
    Identification_Number: string
    Identification_Diplomatic: string
    Identification_KnownExpired: string
    Identification_KnownFalse: string
    Identification_ReportedLost: string
    Identification_RevokedByIssuer: string
    Identification_IssuedBy: string
    Identification_IssuedDate: string
    Identification_ValidFrom: string
    Identification_ValidTo: string
    Identification_LatinNumber: string
    Identification_NameOnDocument: string
    Identification_TypeCode: string
    Identification_TypeDescription: string
    Identification_Region: string
    Identification_CountryIso2Code: string
    Identification_CountryDescription: string
    Identification_LogicalId: string
    Identification_RegulationLanguage: string
    Identification_Remark: string
    Identification_Regulation_Type: string
    Identification_Regulation_OrganisationType: string
    Identification_Regulation_PublicationDate: string
    Identification_Regulation_EntryIntoForceDate: string
    Identification_Regulation_NumberTitle: string
    Identification_Regulation_Programme: string
    Identification_Regulation_PublicationUrl: string
    Citizenship_Region: string
    Citizenship_CountryIso2Code: string
    Citizenship_CountryDescription: string
    Citizenship_LogicalId: string
    Citizenship_RegulationLanguage: string
    Citizenship_Remark: string
    Citizenship_Regulation_Type: string
    Citizenship_Regulation_OrganisationType: string
    Citizenship_Regulation_PublicationDate: string
    Citizenship_Regulation_EntryIntoForceDate: string
    Citizenship_Regulation_NumberTitle: string
    Citizenship_Regulation_Programme: string
    Citizenship_Regulation_PublicationUrl: string
}

