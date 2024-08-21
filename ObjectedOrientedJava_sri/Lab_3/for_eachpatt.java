/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_3;

/**
 *
 * @author srira
 */
public class for_eachpatt {
    public static void main(String args[]){
    int a[]={1,2,3,4,5};
    int index=1;
            for(int i:a)
            {
                while(index<=i)
                {
                    System.out.print(i);
                     System.out.print("  ");
                     index++;
                }
                index=1;
                 System.out.println();
            }
}
}
