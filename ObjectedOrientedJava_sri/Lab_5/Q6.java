/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Lab_5;

import java.util.Scanner;

/**
 *
 * @author srira
 */
public class Q6 {
    public static void main(String args[]) {
        int i;
        Book b[] = new Book[6];
        for (i = 0; i < 6; i++) {
            b[i] = new Book(); // Create a new Book object for each element
            b[i].getdata();
        }

        // Call the sort method to sort the books
        b[0].sort(b);
    }
}

class Book {
    String title;
    String author;
    int edi;
    int i;
    Scanner sc = new Scanner(System.in);

    void getdata() {
        System.out.println("Enter the details of the book");
        title = sc.nextLine();
        author = sc.nextLine();
        edi = sc.nextInt();
    }

    void sort(Book b[]) {
        Book temp;
        int j;
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 6 - 1 - i; j++) { // Correct the loop bounds
                if (b[j].edi > b[j + 1].edi) { // Compare with the next book
                    temp = b[j];
                    b[j] = b[j + 1];
                    b[j + 1] = temp;
                }
            }
        }
        System.out.println("The sorted details are:");
        for (i = 0; i < 6; i++) {
            System.out.println("Title: " + b[i].title);
            System.out.println("Edition: " + b[i].edi);
        }
    }
}
