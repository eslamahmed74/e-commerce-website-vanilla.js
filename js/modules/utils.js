export function getCategoryDisplayName(category) {
    const parts = category.split('-');
    let displayName = '';
  
    switch (parts[0]) {
      case 'clothing':
        displayName = 'Clothing';
        break;
      case 'electronics':
        displayName = 'Electronics';
        break;
      case 'home':
        displayName = 'Home & Kitchen';
        break;
      case 'books':
        displayName = 'Books';
        break;
      default:
        displayName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    }
  
    if (parts.length > 1) {
      let subCategory = '';
      switch (parts[1]) {
        case 'men':
          subCategory = 'Men';
          break;
        case 'women':
          subCategory = 'Women';
          break;
        case 'kids':
          subCategory = 'Kids';
          break;
        case 'phones':
          subCategory = 'Phones';
          break;
        case 'laptops':
          subCategory = 'Laptops';
          break;
        case 'accessories':
          subCategory = 'Accessories';
          break;
        case 'furniture':
          subCategory = 'Furniture';
          break;
        case 'appliances':
          subCategory = 'Appliances';
          break;
        case 'decor':
          subCategory = 'Decor';
          break;
        default:
          subCategory = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
      }
      displayName += ' > ' + subCategory;
    }
  
    return displayName;
  }