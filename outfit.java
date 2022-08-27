public class outfit{
    private ClothingItem[] items;

    public outfit(ClothingItem[] items);
    this.items = items;

    public ClothingItem getItems(){
        return this.items;
    }

    public removeItem(ClothingItem item){
        ClothingItem[] newItems = new ClothingItem[this.items.length - 1];
        int j = 0;
        for (int i = 0; i < this.items.length; ++i){
            if (this.items[i].getName().equals(item.getName()) == false){
               newItems[j] = this.items[i];
                ++j;
            }
        this.items = newItems;
        }
    }
    
    public addItem(ClothingItem item){
        ClothingItem[] newItems = new ClothingItem[this.items.length + 1];
        int j = 0;
        for (int i = 0; i < this.items.length; ++i){
               newItems[i] = this.items[i];
            }
        newItems[this.items.length +1] = item;
        this.items = newItems;        
    }
}