/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_2;

/**
 *
 * @author srira
 */
import java.util.Scanner;
public class Shift_op {
    public static void main(String args[]){
        int n,a,b;
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the number");
        n=sc.nextInt();
        a=n>>1;//divides by 2
        b=n<<1;//multiply by 2
        System.out.println(" the number:"+a);
          System.out.println(" the number:"+b);
}
}
