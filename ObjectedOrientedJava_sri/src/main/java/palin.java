/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author student
 */import java.util.Scanner ;
public class palin {
     public static void main(String args[]){
             int i,n,re=0,r,x;
             Scanner sc=new Scanner(System.in)
             System.out.println("Enter the number u want:");
             n=sc.nextInt();
             x=n;
             while(n>0)
                     {
                         r=n%10;
                         re=(re*10)+r;
                         n=n/10;
                     }
                     if(re==x){
                          System.out.println("the number is palindrome");
                     }
                     else
                     {
                         System.out.println("the number is not palindrome"); 
                     }
     }
}
