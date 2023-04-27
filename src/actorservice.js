import axios from 'axios'
const baseurl='http://localhost:8080/actor'
class ActorService{
 GetActors(){
    return axios.get(baseurl+'/all')
}
GetActor(id){
    // alert(baseurl+'/actor/'+id);
    return axios.get(baseurl+'/ms/'+id)
}

ActorById(id){
    // alert(baseurl+'/id/'+id);
    return axios.get(baseurl+'/id/'+id)
}

ActorSave(actor){

alert(baseurl+'/save/'+actor.name+'    from ActorSave');
    return axios.post(baseurl+'/save',actor);// return axios.post(baseurl+'/save/',name); is fucken wrong
}

ActorwithimageSave(name){
    
    //alert(baseurl+'/save/'+name);
        return axios.post(baseurl+'/ssv',name);// return axios.post(baseurl+'/save/',name); is fucken wrong
    }


MoviePut(aid,mid){
    // alert(baseurl+'/'+aid+'/'+mid)
    return axios.put(baseurl+'/'+aid+'/'+mid);
}

MovieRemove(aid,mid){
    // alert(baseurl+'/'+aid+'/'+mid)
    return axios.put(baseurl+'/deassign/'+aid+'/'+mid);
}

MoviesPerActor(id){
    // alert(baseurl+'/actor/actor/'+id)
    return axios.get(baseurl+'/actor/actor/'+id)
}
}
export default new ActorService();