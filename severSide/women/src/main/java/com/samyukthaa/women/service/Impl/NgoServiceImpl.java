package com.samyukthaa.women.service.Impl;


import com.samyukthaa.women.model.Ngos;
import com.samyukthaa.women.repository.NgoRepository;
import com.samyukthaa.women.service.NgoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NgoServiceImpl implements NgoService {
    @Autowired
    NgoRepository Ngorepository;

    @Override
    public Ngos create(Ngos ngos){
        return Ngorepository.save(ngos);
    }

    @Override
    public List<Ngos> getAllNgo() {
        return Ngorepository.findAll();
    }

    @Override
    public Ngos get_oneNgo(Integer id) {
        return Ngorepository.findById(id).get();
    }

    @Override
    public Ngos update(Ngos ngo) {
        return Ngorepository.save(ngo);
    }

    @Override
    public String deleteLeader(Integer id) {
        Ngorepository.deleteById(id);
        return "NGO details are deleted successfully from the database";
    }

}
