public class ClothingItem {
    private String name;
    private String colour;
    private String product;
    private int size;
    private String material;
    private int price;

    public ClothingItem(String name; String colour; String product) {
        this.name = name;
        this.colour = colour;
        this.product = product;
        size = 0;
        material = "default";
        price = 0;
    }

    public ClothingItem(String name; String colour; String product, int size, String material, int price) {
        this.name = name;
        this.colour = colour;
        this.product = product;
        this.size = size;
        this.material = material;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public String getColour() {
        return colour;
    }

    public String getProduct() {
        return product;
    }

    public String getSize() {
        return size;
    }

    public String getMaterial() {
        return material;
    }

}
