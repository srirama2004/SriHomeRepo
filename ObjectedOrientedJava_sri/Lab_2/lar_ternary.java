package Lab_2;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author srira
 */
import java.util.Scanner;
public class lar_ternary {
     public static void main(String args[]){
        int a,b,c,lar;
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the numbers");
        a=sc.nextInt();
        b=sc.nextInt();
        c=sc.nextInt();
  lar = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
     
      System.out.println("the largest is:"+lar);
        }
}
