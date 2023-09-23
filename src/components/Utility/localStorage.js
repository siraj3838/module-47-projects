const getData = () =>{
    const haveJobData = localStorage.getItem('job-application');
    if(haveJobData){
        return JSON.parse(haveJobData)
    }
    return [];
} 

const setData = (id) =>{
    const haveJobDatas = getData();
    const haven = haveJobDatas.find(jobId => jobId === id)
    if(!haven){
        haveJobDatas.push(id);
        localStorage.setItem('job-application', JSON.stringify(haveJobDatas))
    }
}
export {getData,setData}