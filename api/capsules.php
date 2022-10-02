<?php
class Capsule{
   
    public function __construct($params){
        $this->queryparams = $params;
    }
    // fetch all 
    function read(){
    $url = "https://api.spacexdata.com/v3/capsules";
    $ch = curl_init($url);
    curl_setopt_array($ch,[
        CURLOPT_RETURNTRANSFER => true
    ]);
    $data = curl_exec($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return $data;
    }  
  
}
?>