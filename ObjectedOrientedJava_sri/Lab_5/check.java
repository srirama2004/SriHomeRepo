/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_5;

/**
 *
 * @author srira
 */
public class check {
      public static void main(String args[]){
          digit a =new digit(371);
         boolean b= a.ispositive();
          boolean c=a.even();
          boolean e =a.armstrong();
          System.out.println("1)positive="+b+"   2)even ="+c+"   3)armstrong = "+e);
          
      }
}
class digit{
    private int d;
    digit(int d)
    {
        this. d =d;
    }
    boolean ispositive()
    {
        if(d>=0)
        return true;
        else
         return false;  
    }
    
    boolean even()
    {
        if(d%2==0)
            return true;
        else
            return false;
    }
    boolean armstrong()
    {
        int rem=0,x=0;
        int y=d;
        while(d>0)
        {
            rem=d%10;
            x=x+rem*rem*rem;
            d=d/10;
        }
        if(y==x)
            return true;
        else 
            return false;
    }
}