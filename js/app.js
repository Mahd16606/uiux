/* ======================== FALLBACK DATA ======================== */
const FALLBACK = [
  {id:1,name:"Masala Chai",price:40,category:"Beverages",restaurant:"Raju Dhaba",image_url:"https://images.unsplash.com/photo-1563822249366-3efb23b8e0c7?w=200&h=150&fit=crop"},
  {id:2,name:"Doodh Patti Coffee",price:60,category:"Beverages",restaurant:"Raju Dhaba",image_url:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=150&fit=crop"},
  {id:3,name:"Aloo Paratha",price:70,category:"Parathas",restaurant:"Raju Dhaba",image_url:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=150&fit=crop"},
  {id:4,name:"French Fries",price:50,category:"Snacks",restaurant:"Raju Dhaba",image_url:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=150&fit=crop"},
  {id:11,name:"Chicken Biryani",price:150,category:"Main Course",restaurant:"Raju Dhaba",image_url:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=150&fit=crop"},
  {id:12,name:"Gol Gappay (4 pcs)",price:40,category:"Snacks",restaurant:"Raju Dhaba",image_url:"https://images.unsplash.com/photo-1601050690597-df0563f0a1b3?w=200&h=150&fit=crop"},
  {id:13,name:"Nihari",price:120,category:"Main Course",restaurant:"Raju Dhaba",image_url:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=150&fit=crop"},
  {id:14,name:"Bun Kebab",price:50,category:"Snacks",restaurant:"Raju Dhaba",image_url:"https://images.unsplash.com/photo-1626706975950-98de234f2211?w=200&h=150&fit=crop"},
  {id:5,name:"Sweet Lassi",price:80,category:"Beverages",restaurant:"Spice Grill",image_url:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=150&fit=crop"},
  {id:6,name:"Fresh Lemonade",price:50,category:"Beverages",restaurant:"Spice Grill",image_url:"https://images.unsplash.com/photo-1621263764928-df1df1c3a50e?w=200&h=150&fit=crop"},
  {id:7,name:"Chicken Roll",price:100,category:"Snacks",restaurant:"Spice Grill",image_url:"https://images.unsplash.com/photo-1626706975950-98de234f2211?w=200&h=150&fit=crop"},
  {id:15,name:"Chicken Tikka",price:150,category:"Main Course",restaurant:"Spice Grill",image_url:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=150&fit=crop"},
  {id:16,name:"Vegetable Biryani",price:90,category:"Main Course",restaurant:"Spice Grill",image_url:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=150&fit=crop"},
  {id:17,name:"Mango Shake",price:120,category:"Beverages",restaurant:"Spice Grill",image_url:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=150&fit=crop"},
  {id:18,name:"Fries & Ketchup",price:60,category:"Snacks",restaurant:"Spice Grill",image_url:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=150&fit=crop"},
  {id:8,name:"Margherita Pizza",price:120,category:"Parathas",restaurant:"Pizza Haven",image_url:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=150&fit=crop"},
  {id:9,name:"Pepperoni Pizza",price:90,category:"Parathas",restaurant:"Pizza Haven",image_url:"https://images.unsplash.com/photo-1599219762681-3e6bf1b7e4ff?w=200&h=150&fit=crop"},
  {id:10,name:"Garlic Bread",price:40,category:"Snacks",restaurant:"Pizza Haven",image_url:"https://images.unsplash.com/photo-1601050690597-df0563f0a1b3?w=200&h=150&fit=crop"},
  {id:19,name:"BBQ Chicken Pizza",price:160,category:"Main Course",restaurant:"Pizza Haven",image_url:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=150&fit=crop"},
  {id:20,name:"Cheese Naan",price:40,category:"Parathas",restaurant:"Pizza Haven",image_url:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=150&fit=crop"},
  {id:21,name:"Pasta",price:80,category:"Snacks",restaurant:"Pizza Haven",image_url:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=150&fit=crop"},
  {id:22,name:"Beef Burger",price:130,category:"Main Course",restaurant:"Pizza Haven",image_url:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=150&fit=crop"}
];
const RESTAURANTS = [
  {id:"Raju Dhaba",time:"10-15 mins",img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=350&h=180&fit=crop"},
  {id:"Spice Grill",time:"15-20 mins",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=350&h=180&fit=crop"},
  {id:"Pizza Haven",time:"20-25 mins",img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=350&h=180&fit=crop"}
];
const ALL_CATS = ["Beverages","Parathas","Snacks"];

/* ======================== SHARED STATE (Backend Simulation) ======================== */
const DB = {orders:[],kitchenPaused:false,inventory:{},nextToken:100};
function saveDB(){
  try{localStorage.setItem("cb_db",JSON.stringify(DB))}
  catch(e){console.warn("DB save failed:",e.message);showToast("⚠️ Storage full — data may not persist")}
}
function loadDB(){
  try{
    const d=localStorage.getItem("cb_db");
    if(d){
      const p=JSON.parse(d);
      // FIX 1: nextToken must survive refresh — only ever move it forward
      if(p.nextToken&&p.nextToken>DB.nextToken)DB.nextToken=p.nextToken;
      Object.assign(DB,p);
      DB.nextToken=p.nextToken||DB.nextToken; // ensure persisted
    }
  }
  catch(e){console.warn("DB load failed:",e.message)}
}
function saveSession(){
  loadDB();
  DB.sessions=DB.sessions||{};
  const sk=userEmail||"__guest__";
  DB.sessions[sk]={cart:cart.slice(),cartRestaurant:cartRestaurant,hasCompletedOrder:hasCompletedOrder};
  saveDB();
}
function loadSession(email){
  const sk=email||"__guest__";
  const s=DB.sessions&&DB.sessions[sk];
  if(!s)return;
  cart=s.cart||[];
  cartRestaurant=s.cartRestaurant||null;
  hasCompletedOrder=s.hasCompletedOrder||false;
  
  // Re-hydrate active orders
  loadDB();
  activeOrders = DB.orders.filter(o => o.studentEmail === sk && o.status !== "completed");
  hasActiveOrder = activeOrders.length > 0;
  
  updateBadge();
}
function handleLogout(){
  saveSession();
  userRole=null;userEmail="";cart=[];cartRestaurant=null;activeOrders=[];
  hasActiveOrder=false;hasCompletedOrder=false;searchQuery="";
  _pendingRestaurantSwitch=null;
  clearTimers();stopTimer();
  document.getElementById("orm").classList.remove("s");
  document.getElementById("pm").classList.remove("s");
  // Clear login fields
  document.getElementById("ei").value="";
  document.getElementById("pi").value="";
  document.getElementById("ee").classList.remove("s");document.getElementById("ee").textContent="";
  document.getElementById("pe").classList.remove("s");document.getElementById("pe").textContent="";
  showScreen(2);
}

/* ======================== APP STATE ======================== */
let menuData = [];
let cart = [];
let cartRestaurant = null; // FIX 2: cross-restaurant cart guard
let payMethod = "cash";
let userRole = null;
let userEmail = "";
let staffRestaurant = null;
let currentRestaurant = null;
let currentCategory = "All";
let activeOrders = []; // Array of {id,token,items,total,payment,status,restaurant,timestamp}
let hasActiveOrder = false;
let hasCompletedOrder = false;
let timelineStep = 1;
let trackingTimer = null;
let orderPollTimer = null;
let searchQuery = "";
let kanbanStatus = "new";
let timerInterval = null;
let _pendingRestaurantSwitch = null; // for cross-restaurant dialog

/* ======================== INIT ======================== */
async function init(){
  loadDB();
  animateSplash();
  await loadMenu();
  // Init inventory for any new items
  menuData.forEach(i=>{if(DB.inventory[i.id]===undefined)DB.inventory[i.id]=true});
  saveDB();
  renderHome();
  updateBadge();
}

function animateSplash(){
  const b=document.getElementById("sbf");let w=0;
  const iv=setInterval(()=>{w+=1;b.style.width=w+"%";if(w>=100){clearInterval(iv);setTimeout(()=>showScreen(2),400)}},25);
}

async function loadMenu(){
  try{const r=await fetch("data/menu.json");if(!r.ok)throw Error("HTTP "+r.status);menuData=await r.json()}
  catch(e){console.warn("menu.json failed:",e.message);menuData=FALLBACK.map(x=>({...x}))}
}

/* ======================== AUTH ======================== */
const ei=document.getElementById("ei"),pi=document.getElementById("pi"),ee=document.getElementById("ee"),pe=document.getElementById("pe");
ei.addEventListener("input",()=>{ee.classList.remove("s");ee.textContent=""});
pi.addEventListener("input",()=>{pe.classList.remove("s");pe.textContent=""});

function handleSignIn(){
  let ok=true;const e=ei.value.trim(),p=pi.value;
  if(!e){ee.textContent="Email address is required.";ee.classList.add("s");ok=false}
  else if(!e.includes("@")){ee.textContent="Please include an '@' in the email address.";ee.classList.add("s");ok=false}
  else if(!e.includes(".")){ee.textContent="Please enter a valid email format to proceed.";ee.classList.add("s");ok=false}
  if(!p){pe.textContent="Password is required.";pe.classList.add("s");ok=false}
  else if(p.length<8){pe.textContent="Password must be at least 8 characters.";pe.classList.add("s");ok=false}
  if(!ok)return;
  
  const staffAuth = {
    "admin@rajudhaba.com": { pass: "password123", restaurant: "Raju Dhaba" },
    "admin@spicegrill.com": { pass: "password123", restaurant: "Spice Grill" },
    "admin@pizzahaven.com": { pass: "password123", restaurant: "Pizza Haven" }
  };

  if(e==="u2023000@giki.edu.pk"&&p==="12345678"){
    userRole="student";userEmail=e;loadSession(e);
    if(hasActiveOrder){
      showScreen(8);startTracking()
    }else{showScreen(3)}
  }
  else if(staffAuth[e] && p === staffAuth[e].pass){
    userRole="staff";userEmail=e;staffRestaurant=staffAuth[e].restaurant;
    loadSession(e);showScreen(9);renderStaff()
  }
  else{ee.textContent="Invalid email or password.";ee.classList.add("s")}
}

function guestLogin(){userRole="student";userEmail="";loadSession("__guest__");showScreen(3)}

/* ======================== PROFILE ======================== */
function toggleProfile(){
  const m=document.getElementById("pm");m.classList.toggle("s");
  document.getElementById("pme").textContent=userEmail||"Guest";
  document.getElementById("pmr").textContent=userRole==="staff"?"Staff":userRole==="student"?"Student":"Guest";
}
document.addEventListener("click",e=>{const m=document.getElementById("pm");if(m.classList.contains("s")&&!e.target.closest(".prof-icon")&&!e.target.closest("#pm"))m.classList.remove("s")});

/* ======================== HOME SCREEN ======================== */
function renderHome(){
  const c=document.getElementById("home-content");
  // Banners
  document.getElementById("busy-banner").classList.toggle("s",DB.kitchenPaused);
  document.getElementById("track-banner").classList.toggle("s",hasActiveOrder);
  document.getElementById("reorder-banner").classList.toggle("s",hasCompletedOrder);
  if(searchQuery.trim()){renderSearchResults();return}
  let html="";
  RESTAURANTS.forEach(r=>{
    const cnt=menuData.filter(i=>i.restaurant===r.id).length;
    html+=`<div class="rc" onclick="openRestaurant('${r.id}')">
      <div class="rc-img"><img src="${r.img}" alt="${r.id}" onerror="this.style.display='none';this.parentElement.classList.add('ie')" loading="lazy"><span class="fi">🍽️</span></div>
      <div class="rc-body"><div><div class="rc-name">${r.id}</div><div class="rc-time">🕐 ${r.time} · ${cnt} items</div></div><span class="rc-arrow">→</span></div>
    </div>`;
  });
  c.innerHTML=html;
}

function handleSearch(q){
  searchQuery=q.trim();
  renderHome();
}

function renderSearchResults(){
  const c=document.getElementById("home-content");
  const q=searchQuery.toLowerCase();
  // FIX 6: search matches name, category AND restaurant
  const items=menuData.filter(i=>
    i.name.toLowerCase().includes(q)||
    (i.category&&i.category.toLowerCase().includes(q))||
    (i.restaurant&&i.restaurant.toLowerCase().includes(q))
  );
  c.innerHTML=`<div class="sr"><div class="sr-h">🔍 Results for "${searchQuery}" <span style="font-weight:400;color:#aaa;font-size:12px">(${items.length} found)</span></div>${items.length===0?'<div class="empty-s">😕 No items match — try a dish name, category, or restaurant</div>':''}<div class="mgrid">${items.map(item=>renderMenuItem(item)).join("")}</div></div>`;
}

function renderMenuItem(item){
  const inCart=cart.find(c=>c.id===item.id);
  const inStock=DB.inventory[item.id]!==false;
  const hasImg=!!item.image_url;
  return `<div class="mc">
    <div class="mci${hasImg&&inStock?"":" ie"}">
      ${hasImg&&inStock?`<img src="${item.image_url}" alt="${item.name}" onerror="this.style.display='none';this.parentElement.classList.add('ie')" loading="lazy">`:""}
      <span class="fi">🍽️</span>
      ${!inStock?'<span class="oos-badge">Out of Stock</span>':''}
    </div>
    <div class="mcb">
      <div class="n">${item.name}</div>
      <div class="p">Rs. ${item.price}</div>
      <button class="ab${inCart?" ad":""}${!inStock||DB.kitchenPaused?" ds":""}" onclick="${inStock&&!DB.kitchenPaused?`addToCart(${item.id})`:''}"${!inStock||DB.kitchenPaused?'disabled':''}>${!inStock?"Out of stock":inCart?"✓ Added":"+ Add"}</button>
    </div>
  </div>`;
}

/* ======================== RESTAURANT MENU ======================== */
function openRestaurant(r){
  currentRestaurant=r;currentCategory="All";
  document.getElementById("rm-title").textContent=r+" Menu";
  renderRMCategories();renderRMGrid();showScreen(4);
}

function renderRMCategories(){
  const c=document.getElementById("rm-cpills");c.innerHTML="";
  const items=menuData.filter(i=>i.restaurant===currentRestaurant);
  const cats=[...new Set(items.map(i=>i.category))];
  const ab=document.createElement("button");
  ab.className="cp"+(currentCategory==="All"?" a":"");ab.textContent="All";
  ab.onclick=()=>{currentCategory="All";renderRMCategories();renderRMGrid()};c.appendChild(ab);
  cats.forEach(cat=>{
    const b=document.createElement("button");
    b.className="cp"+(currentCategory===cat?" a":"");
    b.textContent=cat;b.onclick=()=>{currentCategory=cat;renderRMCategories();renderRMGrid()};c.appendChild(b);
  });
}

function renderRMGrid(){
  const grid=document.getElementById("rm-grid");
  document.getElementById("rm-busy").classList.toggle("s",DB.kitchenPaused);
  let items=menuData.filter(i=>i.restaurant===currentRestaurant);
  if(currentCategory!=="All")items=items.filter(i=>i.category===currentCategory);
  grid.innerHTML=items.length?items.map(i=>renderMenuItem(i)).join(""):'<div class="empty-s" style="grid-column:1/-1">No items in this category</div>';
}

/* ======================== CART ======================== */
function addToCart(id){
  if(DB.inventory[id]===false)return;
  if(DB.kitchenPaused){showToast("⏸️ Kitchen is paused — try again shortly");return;}
  const item=menuData.find(x=>x.id===id);
  if(!item)return;
  // FIX 2: cross-restaurant cart mixing guard
  if(cart.length>0&&cartRestaurant&&cartRestaurant!==item.restaurant){
    _pendingRestaurantSwitch={id,restaurant:item.restaurant};
    showClearCartDialog(item.restaurant);
    return;
  }
  if(cart.find(c=>c.id===id)){showToast("Already in cart!");return;}
  cart.push({id,quantity:1});
  cartRestaurant=item.restaurant;
  saveSession();updateBadge();renderHome();renderRMGrid();
  showToast("✓ Added to cart");
}

function showClearCartDialog(newRestaurant){
  document.getElementById("cm-current").textContent = cartRestaurant;
  document.getElementById("cm-new").textContent = newRestaurant;
  const m = document.getElementById("conflict-modal");
  m.style.display = "flex";
}
function confirmClearCart(){
  cart=[];cartRestaurant=null;
  if(_pendingRestaurantSwitch){
    const {id,restaurant}=_pendingRestaurantSwitch;
    _pendingRestaurantSwitch=null;
    cart.push({id,quantity:1});
    cartRestaurant=restaurant;
  }
  document.getElementById("conflict-modal").style.display = "none";
  saveSession();updateBadge();renderHome();renderRMGrid();
  showToast("🛒 Cart cleared — new order started");
}
function cancelClearCart(){
  _pendingRestaurantSwitch=null;
  document.getElementById("conflict-modal").style.display = "none";
}
function showToast(m){const t=document.getElementById("tt");t.textContent=m;t.classList.add("s");setTimeout(()=>t.classList.remove("s"),2000)}
function updateBadge(){
  const cnt=cart.reduce((s,c)=>s+c.quantity,0);const b=document.getElementById("cb");
  b.textContent=cnt;b.classList.toggle("s",cnt>0);
}
function renderCart(){
  const l=document.getElementById("cl");l.innerHTML="";let sub=0;
  cart.forEach(c=>{
    const item=menuData.find(m=>m.id===c.id);if(!item)return;
    sub+=item.price*c.quantity;const hi=!!item.image_url;
    const d=document.createElement("div");d.className="ce";
    d.innerHTML=`<div class="th${hi?"":" te"}">${hi?`<img src="${item.image_url}" alt="${item.name}" onerror="this.style.display='none';this.parentElement.classList.add('te')" loading="lazy">`:""}<span class="tfi">🍽️</span></div>
    <div class="info"><div class="n">${item.name}</div><div class="p">Rs. ${item.price}</div></div>
    <div class="qs"><button onclick="updateQty(${item.id},-1)">−</button><span class="q">${c.quantity}</span><button onclick="updateQty(${item.id},1)">+</button></div>`;
    l.appendChild(d);
  });
  if(!cart.length)l.innerHTML='<div style="text-align:center;padding:40px 0;color:#bbb;font-size:14px">Your cart is empty</div>';
  document.getElementById("sa").textContent="Rs. "+sub;document.getElementById("ta").textContent="Rs. "+sub;
  const pb=document.getElementById("place-btn");
  if(DB.kitchenPaused){pb.textContent="⏸️ Restaurant Busy";pb.classList.add("ds")}
  else{pb.textContent="Place Order →";pb.classList.remove("ds")}
}
function updateQty(id,delta){
  const e=cart.find(c=>c.id===id);if(!e)return;
  e.quantity+=delta;
  if(e.quantity<=0){cart=cart.filter(c=>c.id!==id);if(!cart.length)cartRestaurant=null;}
  saveSession();updateBadge();renderCart();renderHome();renderRMGrid();
}
function clearCart(){
  if(!cart.length)return;
  cart=[];cartRestaurant=null;
  saveSession();updateBadge();renderCart();renderHome();renderRMGrid();
  showToast("🗑️ Cart cleared");
}
function setPay(m){payMethod=m;document.querySelectorAll("#pt .o").forEach(b=>b.classList.toggle("a",b.dataset.m===m))}

/* ======================== ORDER ======================== */
function placeOrder(){
  loadDB();
  if(!cart.length){showToast("🛒 Your cart is empty");return;}
  if(DB.kitchenPaused){showToast("⏸️ Kitchen is paused — cannot place order right now");return;}
  const outOfStock=cart.filter(c=>DB.inventory[c.id]===false);
  if(outOfStock.length){
    const names=outOfStock.map(c=>{const m=menuData.find(x=>x.id===c.id);return m?m.name:"item";}).join(", ");
    showToast("❌ "+names+" no longer available");return;
  }
  const items=cart.map(c=>{const m=menuData.find(x=>x.id===c.id);return{name:m.name,quantity:c.quantity,price:m.price}});
  const total=items.reduce((s,i)=>s+i.quantity*i.price,0);
  const token=DB.nextToken++;
  const oid=Date.now();
  const restaurant=cartRestaurant||"Unknown";
  const order={id:oid,token,items,total,payment:payMethod,status:"new",timestamp:Date.now(),studentEmail:userEmail||"guest",restaurant};
  DB.orders.unshift(order);
  saveDB();
  
  activeOrders.push(order);
  hasActiveOrder=true;hasCompletedOrder=false;
  cartRestaurant=null;
  
  if(payMethod==="online"){document.getElementById("epa").textContent="Rs. "+total;showScreen(6);}
  else{cart=[];saveSession();updateBadge();showScreen(8);}
}
function confirmOnline(){cart=[];saveSession();updateBadge();showScreen(8)}
function showOrderPlaced(sub,order){
  document.getElementById("opsub").textContent=sub;
  document.getElementById("optok").textContent="#"+order.token;
  document.getElementById("opsum").innerHTML=order.items.map(i=>i.quantity+"x "+i.name+" Rs. "+(i.quantity*i.price)).join("<br>");
}

/* ======================== TRACKING (Multiple Orders) ======================== */
function renderActiveOrders(){
  const l = document.getElementById("active-orders-list");
  if(!l) return;
  if(!activeOrders.length){
    l.innerHTML = '<div style="text-align:center;padding:40px;color:#888;">No active orders.</div>';
    return;
  }
  l.innerHTML = activeOrders.map(o => {
    let statusColor = o.status === 'new' ? '#3b82f6' : (o.status === 'preparing' ? '#f59e0b' : '#10b981');
    let statusText = o.status.toUpperCase();
    return `<div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:1px solid #eaeaea;">
      <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
        <div style="font-weight:700;font-size:16px;">${o.restaurant}</div>
        <div style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:20px;background:${statusColor}20;color:${statusColor}">${statusText}</div>
      </div>
      <div style="font-size:12px;color:#888;margin-bottom:8px;">Token #${o.token}</div>
      <div style="font-size:13px;color:#444;margin-bottom:12px;line-height:1.5;">
        ${o.items.map(i=>`• ${i.quantity}x ${i.name}`).join("<br>")}
      </div>
      <div style="display:flex;justify-content:space-between;border-top:1px solid #eee;padding-top:10px;font-size:13px;">
        <span style="color:#666">ETA: <b>15-20 mins</b></span>
        <span style="color:#FF5C28;font-weight:600">Track Live</span>
      </div>
    </div>`;
  }).join("");
}

function clearTimers(){if(orderPollTimer){clearInterval(orderPollTimer);orderPollTimer=null}}

function startTracking(){
  clearTimers();
  loadDB();
  const email = userEmail || "guest";
  activeOrders = DB.orders.filter(o => o.studentEmail === email && o.status !== "completed");
  hasActiveOrder = activeOrders.length > 0;
  
  if(!hasActiveOrder){renderHome();return;}
  
  renderActiveOrders();
  
  orderPollTimer=setInterval(()=>{
    loadDB();
    const currentActive = DB.orders.filter(o => o.studentEmail === email && o.status !== "completed");
    
    // Check if any order just became ready
    const newReady = currentActive.find(o => o.status === "ready" && !activeOrders.find(a => a.id === o.id && a.status === "ready"));
    
    activeOrders = currentActive;
    hasActiveOrder = activeOrders.length > 0;
    
    renderActiveOrders();
    
    if(newReady){
      hasCompletedOrder = true;
      document.getElementById("orm-token").textContent = newReady.token;
      document.getElementById("orm").classList.add("s");
    }
    
    if(!hasActiveOrder) {
      clearInterval(orderPollTimer);
      orderPollTimer=null;
    }
  },1000);
}

function dismissReady(){document.getElementById("orm").classList.remove("s");saveSession();renderHome()}
function dismissCompleted(){hasCompletedOrder=false;saveSession();renderHome()}

/* ======================== STAFF DASHBOARD ======================== */
function renderStaff(){
  loadDB();
  renderKitchenToggle();
  renderOrderQueue();
  renderInventory();
}

function renderKitchenToggle(){
  const btn=document.getElementById("kt-btn");
  btn.className="kt-sw "+(DB.kitchenPaused?"on":"off");
  btn.innerHTML=DB.kitchenPaused?"▶️ Resume Orders":"⏸️ Pause Incoming Orders";
}

function toggleKitchen(){
  DB.kitchenPaused=!DB.kitchenPaused;
  saveDB();renderKitchenToggle();
  // Update student view
  renderHome();
  const rmg=document.getElementById("rm-grid");if(rmg)renderRMGrid();
  renderCart();
}

function renderOrderQueue(){
  const c=document.getElementById("order-queue");c.innerHTML="";
  const myOrders = DB.orders.filter(o => o.restaurant === staffRestaurant);
  document.getElementById("kn-count").textContent=myOrders.filter(o=>o.status==="new").length;
  document.getElementById("kp-count").textContent=myOrders.filter(o=>o.status==="preparing").length;
  document.getElementById("kr-count").textContent=myOrders.filter(o=>o.status==="ready").length;
  document.getElementById("ch-count").textContent=myOrders.filter(o=>o.status==="completed").length;
  const tabOrders=myOrders.filter(o=>o.status===kanbanStatus);
  if(!tabOrders.length){c.innerHTML='<div class="kanban-empty">No orders in this stage</div>';return}
  tabOrders.forEach(o=>{
    const elapsed=Math.floor((Date.now()-o.timestamp)/60000);
    const secs=Math.floor(((Date.now()-o.timestamp)%60000)/1000);
    const timeStr=elapsed+"m "+String(secs).padStart(2,"0")+"s";
    const overdue=elapsed>=3;
    let btnHtml="",statusClass="";
    if(o.status==="new"){
      btnHtml=`<button class="ocd-btn start" onclick="advanceOrder(${o.id},'preparing')">🔪 Start Preparing</button>`;
    }else if(o.status==="preparing"){
      btnHtml=`<button class="ocd-btn ready-btn" onclick="advanceOrder(${o.id},'ready')">✅ Mark Ready</button>`;
    }else if(o.status==="ready"){
      btnHtml=`<button class="ocd-btn ready-btn" onclick="advanceOrder(${o.id},'completed')">📦 Move to Completed</button>`;
      statusClass="status-ready";
    }
    c.innerHTML+=`<div class="ocd ${statusClass}"><div class="ocd-h"><div class="ocd-token">#${o.token}</div><div class="ocd-time${overdue?' ov':''}" data-ts="${o.timestamp}">${timeStr}</div></div>
    <div class="ocd-items">${o.items.map(i=>"• "+i.quantity+"x "+i.name+" — Rs."+(i.quantity*i.price)).join("<br>")}</div>
    ${btnHtml}</div>`;
  });
}

function switchKanban(s){
  kanbanStatus=s;
  document.querySelectorAll(".kanban-tab").forEach(b=>b.classList.toggle("a",b.dataset.k===s));
  renderOrderQueue();
}

function advanceOrder(id,newStatus){
  const o=DB.orders.find(x=>x.id===id);if(!o)return;
  o.status=newStatus;
  if(newStatus==="ready"){
    // Update active orders list if staff marked it ready
    const active = activeOrders.find(a => a.id === id);
    if(active) active.status = "ready";
  }
  saveDB();renderOrderQueue();
}

function toggleCompleted(){
  const l=document.getElementById("ch-list");
  l.classList.toggle("s");
  if(l.classList.contains("s")){
    const done=DB.orders.filter(o=>o.status==="completed");
    l.innerHTML=done.length?done.map(o=>`<div class="ch-item"><span><span class="ch-token">#${o.token}</span> — ${o.items.map(i=>i.quantity+"x "+i.name).join(", ")}</span><span>Rs.${o.total}</span></div>`).join(""):'<div style="text-align:center;padding:16px;color:#bbb;font-size:12px">No completed orders</div>';
  }
}

function startTimer(){
  if(timerInterval)return
  timerInterval=setInterval(()=>{
    document.querySelectorAll(".ocd-time[data-ts]").forEach(c=>{
      const ts=parseInt(c.dataset.ts);const now=Date.now()
      const mins=Math.floor((now-ts)/60000)
      const secs=Math.floor(((now-ts)%60000)/1000)
      c.textContent=mins+"m "+String(secs).padStart(2,"0")+"s"
      c.classList.toggle("ov",mins>=3)
    })
  },1000)
}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null}}

function renderInventory(){
   const c=document.getElementById("inv-list");c.innerHTML="";
   const items=menuData; // show ALL items
   let html="";
   items.forEach(item=>{
     const inStock=DB.inventory[item.id]!==false;
     html+=`<div class="inv-card${inStock?"":" oos"}">
       <div><div class="inv-name">${item.name}</div><div class="inv-price">Rs. ${item.price}</div></div>
       <button class="inv-toggle ${inStock?"on":"off"}" onclick="toggleStock(${item.id})">${inStock?"In Stock":"Out"}</button>
     </div>`;
   });
   c.innerHTML=html;
 }

function toggleStock(id){
  DB.inventory[id]=DB.inventory[id]===false?true:false;
  saveDB();renderInventory();
  // Immediately update student menu views
  renderHome();
  const rmg=document.getElementById("rm-grid");if(rmg)renderRMGrid();
}

/* ======================== NAVIGATION ======================== */
function showScreen(num){
  for(let i=1;i<=9;i++){const e=document.getElementById("s"+i);if(e)e.style.display="none"}
  const t=document.getElementById("s"+num);if(t)t.style.display="flex"
  document.getElementById("pm").classList.remove("s")
  clearTimers();stopTimer()
  switch(num){
    case 3:saveSession();renderHome();updateBadge();break
    case 4:saveSession();renderRMCategories();renderRMGrid();break
    case 5:renderCart();break
    case 8:startTracking();break
    case 9:
      document.getElementById("staff-email").textContent=userEmail;
      document.getElementById("staff-restaurant-name").textContent=staffRestaurant+" Staff";
      renderStaff();startTimer();break;
  }
  document.getElementById("tt").classList.remove("s")
}

/* ======================== START ======================== */
init();
