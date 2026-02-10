const faqItems = document.querySelectorAll(".faq-item");
document.addEventListener("DOMContentLoaded", () => {
  const savedIndex = sessionStorage.getItem("activeFaqIndex");
  if (savedIndex !== null) {
    const itemToOpen = faqItems[savedIndex];
    if (itemToOpen) {
      openItem(itemToOpen);
    }
  }
});

faqItems.forEach((item, index) => {
  const trigger = item.querySelector(".faq-trigger");

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");
    // Close all Items
    closeAllItems();
    if (!isOpen) {
      openItem(item);
      sessionStorage.setItem("activeFaqIndex", index);
    } else {
      sessionStorage.removeItem("activeFaqIndex");
    }
  });
});

function openItem(item) {
  item.classList.add("active");

  const icon = item.querySelector(".icon");
  icon.src = "assets/images/icon-minus.svg";
  icon.classList.add("rotate");
  const trigger = item.querySelector(".faq-trigger");
  trigger.setAttribute("aria-expanded", "true");
}

function closeAllItems() {
  faqItems.forEach((item) => {
    item.classList.remove("active");

    // Reset icon
    const icon = item.querySelector(".icon");
    icon.src = "assets/images/icon-plus.svg";
    icon.classList.remove("rotate");

    // Update Attr for screen readers
    const trigger = item.querySelector(".faq-trigger");
    trigger.setAttribute("aria-expanded", "false");
  });
}
