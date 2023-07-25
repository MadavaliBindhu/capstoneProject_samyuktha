package com.samyukthaa.women.service;

import com.samyukthaa.women.model.Ngos;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface Ngoservice {
    public  Ngos create(Ngos ngos);

    public List<Ngos> getAllNgo();

    public Ngos get_oneNgo(Integer id);

    public Ngos update(Ngos ngo);

    public String deleteLeader(Integer id);


    List<Ngos> getAllNgos();
}

