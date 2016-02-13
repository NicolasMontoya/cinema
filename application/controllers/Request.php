<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Request extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Request_model', "pt");
    }
    public function index()
    {
        echo "Hola";
    }
    public function get($db)
    {
        $input = $this->input->post('date');
        if($input == 'now')
        {
            $date = date('Y-m-d');
        }
        else
        {
            $date = $input;
        }
        $response = $this->pt->get($db,$date);
        print json_encode($response);
    }
    public function set($db)
    {
        $name = $this->input->post('name');
        $city = $this->input->post('city');
        $data = $this->input->post('datos');
        $input = $this->input->post('date');
        if($input == 'undefined')
        {
            $date = date('Y-m-d');
        }
        else
        {
            $date = $input;
        }
        $response['date'] = $date;
        $response['response'] = $this->pt->set($db,$name,explode(',',$data),$date,$city);
        print json_encode($response);
    }
    public function delete($db)
    {
        $id = $this->input->post('id');
        $this->pt->delete($db,$id);
        $response['response'] = 'ok';
        print json_encode($response);
    }
}