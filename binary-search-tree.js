class TreeNode{
    constructor( val ){
        this.value = val;
        this.left = null;
        this.right = null;

    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let node = new TreeNode(val);
        if(!this.root){
            this.root = node;
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node;
                console.log('inserted to left')

            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right = node
                console.log('inserted to right')
                
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    getRoot(){
        return this.root;
    }

    levelTraversal(root){
        let queue = [root];
        if(root){
            this.levelTraverse(root,queue);
        }
    }
    levelTraverse(root,queue){
        if(queue.length){
            if(root.left)
                queue.push(root.left);
            if(root.right)
                queue.push(root.right);
            let temp = queue.shift();
            console.log(temp);
            this.levelTraverse(queue[0],queue);
        }

    }
    isBinaryTree(root){
        return this.validateBinaryTree(root,null,null);
    }
    validateBinaryTree(root,min,max){
        if ( !root )
            return true
        else if( (min && min.value > root.value) || (max && max < root.value) )
            return false;
        else if( this.validateBinaryTree(root.left, min, root.value) && this.validateBinaryTree(root.right, root.value, max))
            return true;
    }
}

BST = new BinaryTree()
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27);
root = BST.getRoot();
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17 
