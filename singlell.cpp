// singly linked list using c++
#include <iostream>
using namespace std;

// Node class
class Node {
public:
    int data;
    Node* next;
};

// Linked List class
class LinkedList {
public:
    Node* head;
    LinkedList() {
        head = NULL;
    }

    // Add a node at the end
    void append(int data) {
        Node* new_node = new Node();
        new_node->data = data;
        new_node->next = NULL;

        if (head == NULL) {
            head = new_node;
            return;
        }

        Node* last = head;
        while (last->next != NULL) {
            last = last->next;
        }

        last->next = new_node;
    }

    // Add a node at the beginning
    void prepend(int data) {
        Node* new_node = new Node();
        new_node->data = data;
        new_node->next = head;
        head = new_node;
    }

    // Delete a node by value
    void delete_node(int data) {
        Node* temp = head;
        Node* prev = NULL;

        if (temp != NULL && temp->data == data) {
            head = temp->next;
            delete temp;
            return;
        }

        while (temp != NULL && temp->data != data) {
            prev = temp;
            temp = temp->next;
        }

        if (temp == NULL) {
            return;
        }

        prev->next = temp->next;
        delete temp;
    }

    // Print the linked list
    void print() {
        Node* temp = head;
        while (temp != NULL) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }
};

int main() {
    LinkedList ll;
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    ll.print();

    ll.prepend(0);
    ll.print();

    ll.delete_node(3);
    ll.print();

    return 0;
}