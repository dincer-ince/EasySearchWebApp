//All the models used

export class loginModel {
  userName = '';
  password = '';
}

export class ApiKeyModel{
  id=0;
  value="";
  name="";
  createDate:number=0;
}

export class PaginatorModel {
  previousPageIndex = 0;
  pageIndex = 0;
  pageSize = 10;
  length = 0;
}

export class DocumentModel {
  id: number = 0;
  dictionaryId=0;
  title = '';
  rawDocument = '';
  numberOfWords = 0;
  extraFields: string[] = [];
  similarity?:number;
  
}

export class DictionaryModel {
  id = 0;
  name = '';
  documents: DocumentModel[] = [];
  extraFieldDescription: string[]=[]
  numberOfDocuments = 0;
  totalNumberOfWords = 0;
  preferredSearch:number=0;
}

export class PostDictionary{
  userID="";
  name="";
  extraFieldDescription:string[]=[];
}

export class PostDocument{
  dictionaryID=0;
  title="";
  rawDocument="";
  extraFields:string[]=[];
}

export class UserModel {
  id = "";
  userName = '';
  email = '';
  dictionaries: DictionaryModel[] = [];
  apiKeys:ApiKeyModel[]=[];
}

export class UserAuth{
    token!:string;
    user!:UserModel;
  }

export class passwordUpdateDTO {
  currentPassword="";
  newPassword="";
}



