"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6466],{28757:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>v,contentTitle:()=>k,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>_});var s=t(87462),i=(t(67294),t(3905)),n=t(55410),m=(t(44646),t(98682)),r=t.n(m),o=(t(96501),t(90502)),p=(t(23091),t(43296)),l=t(75189),c=t(65254),d=t(18679);const u={id:"track",title:"API to track events",description:"This action is utilized for tracking details about an event",sidebar_label:"API to track events",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk1v2zgQ/SvEXHqRHTtJm0S37qKHoFg0qNND1zaCETm22UgkS1JuvIb/+2IoyZbttNhifZLng5x582aGW1AUpNcuamsgh8eVDgIl/xM6iDrqUv9DSiysF9GjfNZmKRRF1GUQWNg6CjSC1mQiZGAdeWTfewU5JHvIwNP3mkL8w6oN5FuQ1kQ2z7eAzpVaJo+Lb4ED2EKQK6qQv5zn86KmsHd7adyU0uyD5UPfZJedJFOhE3YhDuaivVt4KjGSEtGKuKIm/plZelu7J604cxQVGoXR+o1oA9kIbZJ5G0omZgaN6p+/0FSqICQaUZDQRpa1IjWEDOLGEeRgi28kI+wySHc+GayIUzqpAiNHqonrTRBsNTOT2jnrYycPuQh6aUg91S7rPrXZf9o6ZgKltLWJT9ITJ3wQKCrpSIBK8VGB/EHmqbLrVgoZ0AtWruQ0JnppxBd3yCtEr82S8zqu2m+W6uAsMAQr9StV+uu0Lo21cOQbkxauPTgiF1OqUJdZ0mRioX1ooM9Eie3nfO+hDXtwzicKZvuJ5gRfVneiE4sW8F9YHCpwdEsm0mebQfr2tuw79sv0M8/5axyMuqIQsXKvULAD/E0Qe7OuAe4nn8Ttu9FYhMjF8Gk+VBiPOHI5urwajMeDy9vH8V1++S4fjf+GDFrLHBRGGvDRr7EoBa7VeVz3innCQSSgFt5WYmNrLzxJ61U4CuGKrm+usaDB27vrq8H1eKEGt8VNMbiWtzeo7t4WI3lzfvuuGVnak4J82m/UQ1xHPM/2w6kP6fwM8N0Z7VOji/cP9+JzMyRFmpIpguCsCU0XXY5G50h01/7+KK0oBFymuXMGfHdvC/6ZPtRSUgg9XWFtSWgSbmcJJyEuAwN5b0L0dUUmpjAZoIriyvKucDYweg7jCnK46FZHIL8mz95bqH0JOaxidCG/uECnh4rWQ3RuGCJhGVcBMbgSIzNsKG3FNrCb8ymy9jpu0jHRPpOBfDrvayaMVANOq9+CZpBXhCrNvmZQw8cPXw+EQac/0iYlzpB/Puy5Dx0F+3vrZOj3hqg7mY29vvxZG+0b5L+RfJeBNgv7ep+72jsbqGksHYSyMpWJ9yB3WqkDr3kl6MWVqM3MPK68XtMkonx+E4Sri1JLoY/ry7QOqSNiasbGRyQn1vFW5OI2cYyGo+E47Q8bYoWpAi1O3B68AlKvNKsPThqp96r4n0+YtrRcsouUbJpGTL1ty85p+7CZZ7Bi1uZT2G4LDPTFl7sdi7/X5Jls8wzW6DUWnP90vss6OjEPn2kDOfzZhD145GvZvKwbZp108y7rPN5LSS7+0rbfWA+fJo+QQdE+viqr2MfjD36Y4Q/IYQYzSG83PiG1QJJvoUSzrNOcgOZc/v0LzTqRJg==",sidebar_class_name:"post api-method",info_path:"public_apis/thrive-stack-api",custom_edit_url:null},k=void 0,y={unversionedId:"public_apis/track",id:"public_apis/track",title:"API to track events",description:"This action is utilized for tracking details about an event",source:"@site/docs/public_apis/track.api.mdx",sourceDirName:"public_apis",slug:"/public_apis/track",permalink:"/public_apis/track",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"track",title:"API to track events",description:"This action is utilized for tracking details about an event",sidebar_label:"API to track events",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk1v2zgQ/SvEXHqRHTtJm0S37qKHoFg0qNND1zaCETm22UgkS1JuvIb/+2IoyZbttNhifZLng5x582aGW1AUpNcuamsgh8eVDgIl/xM6iDrqUv9DSiysF9GjfNZmKRRF1GUQWNg6CjSC1mQiZGAdeWTfewU5JHvIwNP3mkL8w6oN5FuQ1kQ2z7eAzpVaJo+Lb4ED2EKQK6qQv5zn86KmsHd7adyU0uyD5UPfZJedJFOhE3YhDuaivVt4KjGSEtGKuKIm/plZelu7J604cxQVGoXR+o1oA9kIbZJ5G0omZgaN6p+/0FSqICQaUZDQRpa1IjWEDOLGEeRgi28kI+wySHc+GayIUzqpAiNHqonrTRBsNTOT2jnrYycPuQh6aUg91S7rPrXZf9o6ZgKltLWJT9ITJ3wQKCrpSIBK8VGB/EHmqbLrVgoZ0AtWruQ0JnppxBd3yCtEr82S8zqu2m+W6uAsMAQr9StV+uu0Lo21cOQbkxauPTgiF1OqUJdZ0mRioX1ooM9Eie3nfO+hDXtwzicKZvuJ5gRfVneiE4sW8F9YHCpwdEsm0mebQfr2tuw79sv0M8/5axyMuqIQsXKvULAD/E0Qe7OuAe4nn8Ttu9FYhMjF8Gk+VBiPOHI5urwajMeDy9vH8V1++S4fjf+GDFrLHBRGGvDRr7EoBa7VeVz3innCQSSgFt5WYmNrLzxJ61U4CuGKrm+usaDB27vrq8H1eKEGt8VNMbiWtzeo7t4WI3lzfvuuGVnak4J82m/UQ1xHPM/2w6kP6fwM8N0Z7VOji/cP9+JzMyRFmpIpguCsCU0XXY5G50h01/7+KK0oBFymuXMGfHdvC/6ZPtRSUgg9XWFtSWgSbmcJJyEuAwN5b0L0dUUmpjAZoIriyvKucDYweg7jCnK46FZHIL8mz95bqH0JOaxidCG/uECnh4rWQ3RuGCJhGVcBMbgSIzNsKG3FNrCb8ymy9jpu0jHRPpOBfDrvayaMVANOq9+CZpBXhCrNvmZQw8cPXw+EQac/0iYlzpB/Puy5Dx0F+3vrZOj3hqg7mY29vvxZG+0b5L+RfJeBNgv7ep+72jsbqGksHYSyMpWJ9yB3WqkDr3kl6MWVqM3MPK68XtMkonx+E4Sri1JLoY/ry7QOqSNiasbGRyQn1vFW5OI2cYyGo+E47Q8bYoWpAi1O3B68AlKvNKsPThqp96r4n0+YtrRcsouUbJpGTL1ty85p+7CZZ7Bi1uZT2G4LDPTFl7sdi7/X5Jls8wzW6DUWnP90vss6OjEPn2kDOfzZhD145GvZvKwbZp108y7rPN5LSS7+0rbfWA+fJo+QQdE+viqr2MfjD36Y4Q/IYQYzSG83PiG1QJJvoUSzrNOcgOZc/v0LzTqRJg==",sidebar_class_name:"post api-method",info_path:"public_apis/thrive-stack-api",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"API to get token for insturmentation APIs",permalink:"/public_apis/token"}},v={},_=[{value:"Request",id:"request",level:2}],g={toc:_};function b(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"API to track events"),(0,i.kt)(r(),{method:"post",path:"/track",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"This action is utilized for tracking details about an event"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(d.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Track API Request Body"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"context"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"map of additional content related to the event\ngroup_id is a mandatory property in the context,\nand additional fields can be included."))))),(0,i.kt)(l.Z,{collapsible:!1,name:"event_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Tracked event's name\nSupported events: signed_up, signed_in, signed_out, account_created, account_deleted, account_added_user, account_removed_user",example:"Sign Up",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"properties"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"map of properties associated to the event\nMandatory properties as per event name\nsigned_up : ","[email, name, first_name, last_name]","\nsigned_in : ","[user_name]","\nsigned_out : ","[user_name]","\naccount_created : ","[account_name]","\naccount_deleted : ","[account_name]","\naccount_added_user : ","[user_name, user_email, user_role]","\naccount_removed_user: ","[user_name, user_email]"))))),(0,i.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"The event's timestamp in the ISO 8601 standard format",example:"2023-11-28T19:26:01Z",format:"date-time",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"user_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Id of the user from your records",example:"3e474abe-5943-41fd-8b7b-4c87ad95b0c7",type:"string"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"response_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,i.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "response_id": "string",\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);