/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author student
 */import java.util.Scanner;
public class fact {
     public static void main(String args[]){
             int i,n,fact=1;
             Scanner sc=new Scanner(System.in)
             System.out.println("Enter the number u want:");
             n=sc.nextInt();
             for(i=n;i>=1;i--)
             {
                 fact=fact*i;
             }
      System.out.println("the factorial is:"+fact);
     }
}
