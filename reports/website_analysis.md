# Cafe Valetta Website Analysis Report

This report provides a detailed technical analysis of the downloaded Cafe Valetta website.

## 1. Overview and Metadata
- **Site Title**: Cafe Valetta
- **Original Source URL**: [https://cafe-valetta.square.site/?location=11ecf1e8de071a27a841ac1f6bbba82c&customer_seat_id=11ecf29eff25e5ca8443b2fbeb6a09cf#7](https://cafe-valetta.square.site/?location=11ecf1e8de071a27a841ac1f6bbba82c&customer_seat_id=11ecf29eff25e5ca8443b2fbeb6a09cf#7)
- **Hosting Platform**: Square Online (formerly Weebly)
- **Merchant ID**: `MLK6YM44SCFA7`
- **Currency**: `AUD`
- **Locale**: `en_AU`
- **Total Products Pre-rendered**: 80

## 2. Technical Stack and Structure
The website was saved as a "Complete Webpage" which includes:
- `Cafe Valetta.html`: The main index HTML page containing the pre-rendered markup and site state bootstrap JSON.
- `Cafe Valetta_files/`: Directory containing static resources:
  - **CSS Style Sheets**: Main styling (`site.*.css`), home page layout, mobile navigation, and online ordering grids.
  - **JavaScript Bundles**: Vue.js library modules, Webpack runtime, locale translation arrays, and the core site bundle (`site.*.js`).
  - **Vector Assets (SVGs)**: Branding and payment icons (Apple Pay, Visa, Mastercard, Google Pay, Amex, JCB).

### Architecture Details
- **Frontend Framework**: Vue.js (highly modular, uses components loader).
- **Module Loader**: SystemJS (`system.js` + import maps).
- **State Initialization**: The page injects a global JSON object `window.__BOOTSTRAP_STATE__` which contains the site settings, category catalog configuration, business hours, and payment configurations.

## 3. Product Catalog & Categories
The bootstrap state lists **18 categories**, but only **5 categories** are pre-rendered with products in the static HTML file. The other categories are loaded dynamically via APIs when requested on the live site.

### Category Summary
| Category Name | ID | Status in Download | Product Count |
| :--- | :--- | :--- | :--- |
| Morning Tea | `10` | Pre-rendered | 3 |
| Dessert | `11` | Dynamic (Empty in HTML) | 0 |
| Breakfast | `2` | Pre-rendered | 19 |
| Lunch | `3` | Dynamic (Empty in HTML) | 0 |
| Soft Drink & Juices | `6` | Pre-rendered | 26 |
| Hot Drinks | `7` | Pre-rendered | 22 |
| Iced Drinks | `8` | Pre-rendered | 10 |
| Beer, Wine & Cocktails | `9` | Dynamic (Empty in HTML) | 0 |
| Children's Lunch Menu | `AMTBQPU5ZSS3WHZFSKRHEPUO` | Dynamic (Empty in HTML) | 0 |
| Lunch | `ASFDM52APIG2ASVN5GZFGSG7` | Dynamic (Empty in HTML) | 0 |
| Morning Tea | `BJ5HR73PEYVIZ73FKHNT3DE2` | Dynamic (Empty in HTML) | 0 |
| Drinks | `JP2A4MMLL4SR6TWMSYGT2WE6` | Dynamic (Empty in HTML) | 0 |
| Beer, Wine & Cocktails | `P3AXHVM6QS32S6RIBU5JKIDR` | Dynamic (Empty in HTML) | 0 |
| Children's Lunch Menu | `REOGEMBZQ7GPQRMEZF4IKY3B` | Dynamic (Empty in HTML) | 0 |
| Childrens Drinks | `RHCSMR3PVGCM2RNM5BJGCLRR` | Dynamic (Empty in HTML) | 0 |
| Dessert | `SABSGPQEONPEESOZY5FSP72F` | Dynamic (Empty in HTML) | 0 |
| Children's Breakfast Menu | `SUSQR4MDSPDQEZ7AKHBWE3YN` | Dynamic (Empty in HTML) | 0 |
| Breakfast | `XNZVBZBZSK32FC6PINA6NYRK` | Dynamic (Empty in HTML) | 0 |

## 4. Pre-rendered Menu Item Details
Below are all the products that are statically available in the downloaded HTML:

### Hot Drinks (22 Items)
| Item Name | Price | Description |
| :--- | :--- | :--- |
| **Cappuccino** | $5.00 - $7.00 | *No description provided* |
| **Flat White** | $5.00 - $7.00 | *No description provided* |
| **Latte** | $5.00 - $7.00 | *No description provided* |
| **Piccolo Latte** | $4.80 | *No description provided* |
| **Long Black** | $4.80 - $7.00 | *No description provided* |
| **Short Black** | $4.20 | *No description provided* |
| **Macchiato** | $4.20 - $4.80 | *No description provided* |
| **Mocha** | $6.00 - $7.00 | *No description provided* |
| **Chai Latte** | $5.00 - $7.00 | *No description provided* |
| **Dirty Chai Latte** | $6.00 - $7.90 | *No description provided* |
| **Hot Chocolate** | $5.30 - $6.90 | *No description provided* |
| **Italian Hot Chocolate** | $10.90 | From Milan, Italy - A traditional thick & rich hot chocolate served with cream |
| **Bailey's Hot Chocolate** | $13.90 | Traditional hot chocolate served in a tall glass with a shot of Bailey's liquor & topped with whipped cream.  18+, Available from 10am |
| **Babyccino** | $3.00 | Babyccino with 2 marshmallows |
| **Puppyccino** | $2.00 | Frothy milk served in a take away cup |
| **English Breakfast Tea** | $6.00 | Loose leaf tea pot for one |
| **Earl Grey Tea** | $6.00 | Loose leaf tea pot for one |
| **Irish Breakast Tea** | $6.00 | Loose leaf tea pot for one |
| **Chai Tea** | $7.50 | Loose leaf tea pot for one served on milk with a side of honey |
| **Green Tea** | $6.00 | Loose leaf tea pot for one |
| **Peppermint Tea** | $6.00 | Loose leaf tea pot for one |
| **Lemongrass & Ginger Tea** | $6.00 | Loose leaf tea pot for one |

### Iced Drinks (10 Items)
| Item Name | Price | Description |
| :--- | :--- | :--- |
| **Mixed Berry Smoothie** | $11.50 | Real fruit mixed berry smoothie |
| **Mango Smoothie** | $11.50 | Real fruit mango smoothie |
| **Thick Shake** | $10.90 | *No description provided* |
| **Milkshake** | $9.00 | *No description provided* |
| **Iced Chocolate** | $9.50 | *No description provided* |
| **Iced Coffee** | $9.50 | House made iced coffee with ice cream & cream |
| **Coffee Frappe** | $9.50 | *No description provided* |
| **Iced Latte** | $6.70 | Double shot coffee with ice and milk |
| **Iced Long Black** | $6.00 | *No description provided* |
| **Iced Chai Latte** | $7.00 | *No description provided* |

### Morning Tea (3 Items)
| Item Name | Price | Description |
| :--- | :--- | :--- |
| **House made cakes** | $10.50 - $11.50 | Please select a cake from the list below - all cakes are served with fresh cream |
| **Banana Bread** | $9.00 | House made banana bread warmed with butter curls |
| **Scones** | $9.50 - $11.50 | Serve of 2 freshly baked scones with jam & cream |

### Soft Drink & Juices (26 Items)
| Item Name | Price | Description |
| :--- | :--- | :--- |
| **Coke** | $5.90 | *No description provided* |
| **Coke no sugar** | $5.90 | *No description provided* |
| **Diet Coke** | $5.90 | *No description provided* |
| **Lemon, lime & bitters** | $7.50 | Lemonade, fresh lemon & lime, lime syrup, angostura bitters |
| **Lemonade** | $5.90 | *No description provided* |
| **GInger Beer** | $6.10 | *No description provided* |
| **Diet Ginger Beer** | $6.10 | *No description provided* |
| **Sarsaparilla** | $5.30 | *No description provided* |
| **San Pellegrino** | $5.90 - $11.90 | *No description provided* |
| **Lipton Iced Tea** | $4.90 - $6.90 | *No description provided* |
| **Creaming Soda** | $6.10 | *No description provided* |
| **Blood Orange** | $6.10 | *No description provided* |
| **Pink Grapefruit** | $6.10 | *No description provided* |
| **Orange Juice** | $6.50 | *No description provided* |
| **Pineapple Juice** | $6.50 | *No description provided* |
| **Apple Juice** | $6.50 | *No description provided* |
| **Tropical Juice** | $8.70 | Mountain Fresh Juices |
| **Apple & Mango Juice** | $8.70 | Mountain Fresh Juices |
| **Apple & Guava Juice** | $8.70 | Mountain Fresh Juice |
| **Mango Frappe** | $9.50 | *No description provided* |
| **Mango Smoothie** | $11.50 | Real fruit mango smoothie |
| **Mixed Berry Smoothie** | $11.50 | Real fruit mixed berry smoothie |
| **Kids Smoothie** | $7.00 | Children sized mango or mixed berry smoothie served in a take away cup |
| **Kids orange juice** | $4.80 | Kids juice served in a take away cup |
| **Kids Apple Juice** | $4.80 | Kids Apple Juice served in a Takeaway cup |
| **Kids pineapple juice** | $4.80 | Kids juice served in take away cup |

### Breakfast (19 Items)
| Item Name | Price | Description |
| :--- | :--- | :--- |
| **Eggs on Toast** | $17.50 | Eggs to your liking on toasted turkish bread. |
| **Avocado on toast** | $19.90 | Roast tomato aioli, locally grown avocado, beetroot relish, whipped fetta, lemon wedge & house made dukkah on toasted sourdough (V). |
| **Breakfast Croissant** | $25.50 | Butter croissant topped with smashed avocado, fresh spinach, bacon, free range poached egg, hash brown and house made hollandaise. |
| **Bacon  & Eggs** | $26.50 | Bacon, slow roasted tomato, hash brown, toasted turkish bread and eggs to your liking. |
| **Pancakes** | $25.50 | Buttermilk pancakes with salted caramel sauce, toasted coconut, brulee banana, macadamia and coconut crumb, strawberries and vanilla ice cream. |
| **Corn Fritters** | $25.90 | Corn fritters served with bacon, poached egg, cherry tomato, avocado, feta and coriander salsa and tomato relish |
| **Eggs Valetta** | $25.90 | Slow roasted tomato, mushrooms , avocado, toasted turkish bread and poached eggs (V).   *Please note - Due to a wide spread Asparagus shortage this dish will be substituted with mushrooms, please chat to our friendly staff for other vegetarian substitution options. |
| **Porridge** | $21.90 | Creamy coconut, cinnamon, barley & oats porridge topped with caramelised miso pear & apple compote, toasted walnuts, strawberries & vanilla bean mascarpone. |
| **Eggs Benedict with Ham** | $18.50 - $26.50 | Served on toasted turkish bread with fresh shoulder ham and house made hollandaise |
| **Eggs Benedict with Bacon** | $18.50 - $26.50 | Served on toasted turkish bread with bacon and house made hollandaise |
| **Eggs Benedict with Smoked Salmon** | $20.00 - $28.90 | Served on toasted turkish bread with smoked salmon and house made hollandaise |
| **Baked Eggs** | $24.90 | House made chorizo and baked beans hot pot topped with fried eggs, chilli oil, feta and toasted turkish bread. |
| **Omelette** | $27.90 | Three egg omelette with spinach, ham, mushroom and feta served with toasted turkish bread. |
| **Chilli Scrambled** | $22.90 | Free range scrambled eggs topped with house made chilli oil, grilled chorizo, feta and chilli threads on toasted sourdough. |
| **Panna Cotta** | $23.50 | Chai panna cotta topped with pistachio nougat crumb served with house made oat, nut & puffed wheat granola, chai spiced coulis, caramelised apple, vanilla bean mascarpone, strawberries and almond tuile. |
| **French Toast** | $25.90 | House made brioche french toast with maple syrup, berries, ice cream and bacon |
| **Fruit & Nut Loaf** | $11.90 | One slice of toasted fruit and nut loaf with vanilla poached pears and whipped lemon curd |
| **Ham & Cheese Toastie** | $20.50 | Shaved ham, cheese & tomato on toasted turkish bread. |
| **Toasted Croissant** | $11.50 | Freshly toasted croissant served with jam and butter curls. |

### Childrens Drinks (0 Items)
| Item Name | Price | Description |
| :--- | :--- | :--- |

## 5. Offline Capabilities and Recommendations
Since the website is a static download:
1. **Visual Presentation**: The styling, colors, layout, and static text will work perfectly offline if opened in a browser.
2. **Dynamic Menu Loading**: Tabs like **Lunch**, **Dessert**, and **Beer, Wine & Cocktails** will appear empty because their contents are fetched from Square Online's databases via AJAX/Fetch API calls, which require an active internet connection and live endpoint access.
3. **Shopping Cart & Checkout**: Interactive features like adding products to cart, choosing modifiers, or checking out will fail because they depend on API endpoints hosted on `square.online` and `weebly.com`.