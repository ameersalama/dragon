class Dragon {
    private String name;
    private int hp;
    private int maxHp;
    public Dragon(String n, int mHp) {
        this.name = n;
        this.maxHp = mHp;
        this.hp = mHp;
    }

    public String getName() {
        /** Returns Name Of Dragon */
        return name;
    }
    public int getHp() {
        /** Returns current HP Of Dragon */
        return hp;
    }
    public int attack() {
        /** Returns Attack from Dragon */
        Random rand = new Random();
        return 3+rand.nextInt(5);
    }
    public void takeDamage(int d) {
        /** Takes Damage on Dragon */
        hp = hp - d;
        if(hp < 0)
            hp=0;
    }
    public String toString() {
        /** Returns Name Of Dragon and Hp in string format */
        return this.name + ": " + this.hp + "/" + this.maxHp;
    }