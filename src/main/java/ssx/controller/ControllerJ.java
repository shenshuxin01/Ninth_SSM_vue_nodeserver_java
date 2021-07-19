package ssx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import ssx.service.ServiceJ;

import java.util.Map;

@Controller
public class ControllerJ {

    @Autowired
    ServiceJ serviceJ;

    @RequestMapping(value = "/ninth/setName.do")
    @ResponseBody
    public Map setDB(@RequestBody Map reqMap){
        return serviceJ.setDB(reqMap);
    }
}
