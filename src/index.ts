import {GithubApiService} from "./GithubApiService";
import {User} from "./User";
import {Repo} from "./Repo";
import * as _ from "lodash";

var service=new GithubApiService();
//koushikkothagal

if(process.argv.length<3){
  console.log("Please Add User Name");
}else{
    let userName=process.argv[2];
    service.getUserInfo(userName,(user:User)=>{
      service.getRepos(userName,(repos:Repo[])=>{
          let sortedRepo=_.sortBy(repos,[(repo:Repo)=> repo.size*-1]);
          let filterdRepo=_.take(sortedRepo,2);
          user.repos=filterdRepo
          console.log(user);
      });
  });
}
