import { TestBed } from '@angular/core/testing';

import { DocumentsService } from './documents.service';
import { DictionaryModel } from '../models/models';

describe('DocumentsService', () => {
  const tempDictionary:DictionaryModel= {id:1,name:"Posts",documents:[
    {id:1,title:"The office 1st season analysis",dictionaryId:1,
    rawDocument:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati unde ipsam, nam praesentium exercitationem. Suscipit, temporibus culpa sequi, aliquid eius quo perspiciatis est tenetur itaque amet voluptatum numquamLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati unde ipsam, nam praesentium exercitationem. Suscipit, temporibus culpa sequi, aliquid eius quo perspiciatis est tenetur itaque amet voluptatum numquamLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati unde ipsam, nam praesentium exercitationem. Suscipit, temporibus culpa sequi, aliquid eius quo perspiciatis est tenetur itaque amet voluptatum numquam omnis.",
    numberOfWords:80,similarity:0.5,extraFields:[
      "15","30", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati unde ipsam, nam praesentium exercitationem. Suscipit, temporibus culpa sequi, aliquid eius quo perspiciatis est tenetur itaque amet voluptatum numquam"
    ]},
    {id:2,title:"Working Conditions for people in Central Asia.",dictionaryId:1,
    rawDocument:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati unde ipsam, nam praesentium exercitationem. Suscipit, temporibus culpa sequi, aliquid eius quo perspiciatis est tenetur itaque amet voluptatum numquamLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati unde ipsam, nam praesentium exercitationem. Suscipit, temporibus culpa sequi, aliquid eius quo perspiciatis est tenetur itaque amet voluptatum numquamLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati unde ipsam, nam praesentium exercitationem. Suscipit, temporibus culpa sequi, aliquid eius quo perspiciatis est tenetur itaque amet voluptatum numquam omnis.",
    numberOfWords:90,similarity:0.6,extraFields:[
      "15","30", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati unde ipsam, nam praesentium exercitationem. Suscipit, temporibus culpa sequi, aliquid eius quo perspiciatis est tenetur itaque amet voluptatum numquam"
    ]}
  ],numberOfDocuments:32,totalNumberOfWords:4021,extraFieldDescription:[
    "Likes","Dislikes"
  ]};
  let service: DocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
