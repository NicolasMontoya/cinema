<?php

class Request_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
    public function get($db, $date)
    {
        $where = array('fecha' => $date);
        $this->db->where($where);
        $data = $this->db->get($db);
        return $data->result();
    }
    public function set($db,$name,$data,$date,$city)
    {
        for($i = 0;$i < count($data);$i++)
        {
            if((int)$data[$i] <= 9)
            {
                $type = 1;
            }
            else
            {
                $type = 0;
            }
            $array = array('nombre' => $name,'ciudad' => $city, 'silla' => $data[$i], 'fecha' => $date, 'tipo' => $type);
            $this->db->insert($db, $array);
        }
        return 'Ok';
    }
    public function delete($db,$id)
    {
        $where = array('id' => $id);
        $this->db->where($where);
        $this->db->delete($db);
    }


}