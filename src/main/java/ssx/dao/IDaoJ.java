package ssx.dao;

import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Repository;

@Repository
public interface IDaoJ {

    @Insert("insert into ssx.ninth values(sysdate(),#{name})")
    boolean addName(String name);
}
