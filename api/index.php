<?php

require_once 'jwt_utils.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

include_once './capsules.php';
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if($_SERVER['REQUEST_URI'] === '/getToken'){
        $username = 'BrainStromForce';
		$headers = array('alg'=>'HS256','typ'=>'JWT');
		$payload = array('username'=>$username, 'exp'=>(time() + 60));
		$jwt = generate_jwt($headers, $payload);
        echo json_encode(array('token' => $jwt));
        return;
    }
    $bearer_token = get_bearer_token();
    $is_jwt_valid = is_jwt_valid($bearer_token);
    if(!$is_jwt_valid) {
        $url_components = parse_url($_SERVER['REQUEST_URI']);
        $capsules = new Capsule($url_components);
        $data = $capsules->read();
        echo json_encode(array('data' => $data));
    } else {
        echo json_encode(array('error' => 'Access denied'));
    }		
   
}