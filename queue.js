const section = document.getElementById('section');


let queueData = [
    {
        title: "Circular Queue Implementation (using Arrays)",
        body: `#include &lt;iostream&gt;
        using namespace std;
        
        
        
        class Queue{
            public: 
                int *arr;
                int cs;
                int Rear;
                int Front;
                int ms;
        
            Queue(int size=5){
                arr= new int[size];
                cs=0;
                Front=0;
                Rear=size-1;
                ms=size;
            }
        
            bool isEmpty(){
                return cs==0;
            }
            bool isFull(){
                return cs==ms;
            }
        
            void push(int d){
                if(!isFull()){
                    Rear= (Rear+1)%ms;
                    arr[Rear]=d;
                    cs++;
                }
            }
        
            void pop(){
                if(!isEmpty()){
                    Front=(Front+1)%ms;
                    cs--;
                }
            }
        
            int front(){
                return arr[Front];
            }
        
            <span>//destructor</span>
            ~Queue(){
                if(arr!=NULL){
                    delete [] arr;
                    arr=NULL;
                }
            }
        
        };
        
        int main() {
            Queue q;
            
            for(int i=1;i&lt;=6;i++){
                q.push(i);
            }
        
            q.pop();
            q.pop();
        
            q.push(7);
            q.push(2);
        
            while(!q.isEmpty()){
                cout&lt;&lt;q.front()&lt;&lt;"&lt;-";
                q.pop();
            }
        }
        `
    },
    {
        title:"Queue Implementation (Using Linked List)",
        body:`
        #include &lt;iostream&gt;
        using namespace std;
        
        class node{
            public: 
            int data;
            node*next;
        
            node(int d){
                data=d;
                next=NULL;
            }
        };
        
        void insertAtHead(node*&head, int d){
            if(head==NULL){
                head= new node(d);
                return;
            }
        
            node*n = new node(d);
            n->next=head;
            head=n;
        }
        
        void insertAtTail(node*&head, int d){
            if(head==NULL){
                insertAtHead(head,d);
                return;
            }
            node*tempTail=head;
            while(tempTail->next!=NULL){
                tempTail=tempTail->next;
            }
            node*n=new node(d);
            tempTail->next=n;
            return;
        }
        
        void removeAthead(node*&head){
            if(head==NULL) return;
            node*del = head;
            head=head->next;
            delete del;
            return;
        }
        void print_ll(node*head){
            while(head!=NULL){
                cout&lt;&lt;head-&gt;data&lt;&lt;"-&gt;";
                head=head->next;
            }
        }
        
        
        class Queue{
            private:
             node*head;
             int cs;
        
             public:
                Queue(){
                    head=NULL;
                    cs=0;
                }
                bool empty(){
                    return cs==0;
                }
        
                void push(int d){
                    insertAtTail(head,d);
                    cs++;
                }
                void pop(){
                    if(!empty()){
                        removeAthead(head);
                        cs--;
                    }
                }
        
                int front(){
                    return head->data;
                }
        };
        
        int main() {
            Queue q;
        
            for(int i =1 ; i <=8; i++){
                q.push(i);
            }
           
            while(!q.empty()){
                cout&lt;&lt;q.front()&lt;&lt;"&lt;-";
                q.pop();
            }   
        }        
        `
    },
    {
        title: "Queue STL (Learn)",
        body: ``
    },
    {
        title: "Implement a Stack using two Queues",
        body: `
        #include &lt;iostream&gt;
        #include&lt;queue&gt;
        using namespace std;
        
       <span>
        // push
        // pop
        // empty
        // top
       </span> 
        
        class stack{
            private:
                queue&lt;int&gt; q1;
                queue&lt;int&gt; q2;
                int top;
            public:
                bool empty(){
                    return q1.empty()&&q2.empty();
                }
        
                void push(int d){
                    if(q1.empty()){
                        q2.push(d);
                        top=d;
                    }
                    else{
                        q1.push(d);
                        top=d;
                    }
                }
        
                void pop(){
                    if(!empty() and q1.empty()){
                        int n=q2.size();
                        while(n-1){
                            int x= q2.front();
                            top=x;
                            q1.push(x);
                            q2.pop();
                            n=n-1;
                        }
                        q2.pop();
                    }else if(!empty() and q2.empty()){
                        int n = q1.size();
                        while(n-1){
                            int x = q1.front();
                            top=x;
                            q2.push(x);
                            q1.pop();
                            n=n-1;
                        }
                        q1.pop();
                    }
                }
                int getTop(){
                    return top;
                }
                int size(){
                    return q1.size()+q2.size();
                }
        };
        
        int main() {
            stack s;
            s.push(1);
            s.push(2);
            s.push(3);
            s.push(4);
            s.push(5);
            s.pop();
            s.pop();
            s.pop();
            while(!s.empty()){
                cout&lt;&lt;s.getTop()&lt;&lt;endl;
                s.pop();
            }
        }
        
        `
    },
    {
        title: "Implement a Queue Class Using two Stacks",
        body: `
        #include &lt;iostream&gt;
        #include&lt;stack&gt;
        using namespace std;
        
        <span>// push, pop , front, empty</span>
        class queue{
            stack&lt;int&gt;s1,s2;
            int front;
        
            public:
                bool empty(){
                    return s1.empty();
                }
        
                void push(int d){
                    if(empty()) front =d;
                    s1.push(d);
                }
        
                void pop(){
                    if(!empty()){
                        <span>//removing and storing (n-1) elements from the stack first to stack two</span>
                        while(s1.size()>1){
                            int x = s1.top();
                            front =x;
                            s2.push(x);
                            s1.pop();
                        }
        
                        <span>// now popping the required element from first stack</span>
                        s1.pop();
        
                        <span>//copying back all the elemetns from 2nd stack to 1st stack</span>
                        while(s2.size()){
                            s1.push(s2.top());
                            s2.pop();
                        }
                    }
                }
        
                int getFront(){
                    return front;
                }
        };
        
        int main() {
            queue q;
            for(int i=1;i<=6;i++){
                q.push(i);
            }
            q.pop();
            q.push(7);
            while(!q.empty()){
                cout&lt;&lt;q.getFront()&lt;&lt;"<-";
                q.pop();
            }
        }
        
        `
    }
]

for(let i= 0 ; i < queueData.length; i++){
         section.innerHTML  += `
            <div class="tab">
            <input type="radio" id="rd${i}" name="rd">
            <label class="tab-label" for="rd${i}">${queueData[i].title}</label>
            <div class="tab-content">
                <pre>
        ${queueData[i].body}
                </pre>
            </div>
        </div>
            `
}

