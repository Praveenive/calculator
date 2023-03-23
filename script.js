function getTheData(value) {
    document.getElementById('result').value+= value;
  }
  let ele =document.getElementById("clear");
  ele.addEventListener("click",getcancel)
  function getCancel(value){
    document.getElementById("result").value=" ";
  }
  function getTheFullData(value1){
    let store=document.getElementById("result").value;
    let result = eval(store);
    document.getElementById("result").value=result;
  }