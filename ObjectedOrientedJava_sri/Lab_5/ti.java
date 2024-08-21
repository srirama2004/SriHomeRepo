/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_5;

/**
 *
 * @author srira
 */
public class ti {
     public static void main(String args[]){
           Tim t =new Tim();
           Tim t1 =new Tim();
           t.Tim(1,30,30);
             t1.Tim(2,30,30);
           t.dis();
           t.add(t, t1);
       }
}
class Tim{
    int h,m,s;
    Tim()
    {
        h=0;
        m=0;
        s=0;
    }
 void Tim(int h,int m,int s)
    {
        this.h=h;
        this.m=m;
        this.s=s;
    }
 void add(Tim ob1,Tim ob2)
 {
    int hr=ob1.h+ob2.h;
    System.out.println("after adding hours:"+hr);
 }
    void dis()
    {
        System.out.println(""+h+":"+m+":"+s);
    }
    
}

