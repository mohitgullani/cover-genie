package com.spring.covergenie.Entities;


public class Content {
    public String resume;
    public String jd;

    public Content(String resume, String jd) {
        this.resume = resume;
        this.jd = jd;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getJd() {
        return jd;
    }

    public void setJd(String jd) {
        this.jd = jd;
    }
}
