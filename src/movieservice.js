import axios from 'axios'
const baseurl='http://localhost:8080/ms'
class MovieService{
 GetMovies(page){
    return axios.get(baseurl+'/all'+'?page='+page+'&&size=5')
}

GetMoviesByYear(year){
    return axios.get(baseurl+'/year/'+year)
}
GetMoviesByGener(gener){
    //alert(baseurl+'/gener/'+gener)
    return axios.get(baseurl+'/gener/'+gener)
}
GetMoviesByRate(rate){
    return axios.get(baseurl+'/rate/'+rate)
}

GetMovieActors(id){
   // alert(baseurl+'/ms/'+id);
    return axios.get(baseurl+'/ms/'+id)
}

GetActorstoadd(id){
    // alert(baseurl+'/ms/'+id);
     return axios.get(baseurl+'/actorss')
 }

MoviById(id){
    //  alert(baseurl+'/ma/'+id);
     return axios.get(baseurl+'/movie/'+id)
 }

MovieActors(id){
    //  alert(baseurl+'/ma/'+id);
     return axios.get(baseurl+'/ma/'+id)
 }
 MovieLike(name){
    //  alert(baseurl+'/name/'+name)
     return axios.get(baseurl+'/name/'+name)
 }
MovieSave(name){
const m={
    "name":name
}
//alert(baseurl+'/save/'+name);
    return axios.post(baseurl+'/save',name);// return axios.post(baseurl+'/save/',name); is fucken wrong
}

MoviewithimageSave(name){
    const m={
        "name":name
    }
    //alert(baseurl+'/save/'+name);
        return axios.post(baseurl+'/ssv',name);// return axios.post(baseurl+'/save/',name); is fucken wrong
    }
    PutMoviewithimageSave(id,name){
        // alert(baseurl+'/withimage/'+id,name);
        return axios.put(baseurl+'/withimage/'+id,name);
    }
MoviePut(id,name){

   alert(baseurl+'/'+id,name)
        return axios.put(baseurl+'/'+id,name);// return axios.post(baseurl+'/save/',name); is fucken wrong
    }
    Years(){
        return axios.get(baseurl+'/years')
    }
    MoviesByYear(year){
        return axios.get(baseurl+'/year/'+year)
    }
PreRemove(id){
    // alert(baseurl+'/remove/'+id)
    return axios.delete(baseurl+'/remove/'+id)
}
}
export default new MovieService();