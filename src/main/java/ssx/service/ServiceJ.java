package ssx.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ssx.dao.IDaoJ;

import java.util.HashMap;
import java.util.Map;

@Service
public class ServiceJ {

    @Autowired
    IDaoJ iDaoJ;

    public Map setDB(Map map){
        Object p_name = map.get("p_name");
        boolean b = iDaoJ.addName(p_name.toString());
        HashMap hashMap = new HashMap();
        hashMap.put("yesno",b);
        return hashMap;
    }
}
