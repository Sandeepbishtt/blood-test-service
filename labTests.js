document.addEventListener("DOMContentLoaded", function () {
  const drawer = document.getElementById("testDrawer");

  const tests = {
    "profile-a": {
      title: "Wellness Profile A",
      price: 1099,
      original: 3000,
      discount: "63% OFF",
      parameters: [
        "FBS",
        "Thyroid Profile",
        "Lipid Profile",
        "Liver Profile",
        "Renal Profile",
        "Na K Cl",
        "CBC",
      ],
    },
    "profile-b": {
      title: "Wellness Profile B",
      price: 1299,
      original: 3200,
      discount: "60% OFF",
      parameters: [
        "Thyroid Profile",
        "Lipid Profile",
        "Liver Profile",
        "Renal Profile",
        "Na K Cl",
        "CBC",
        "HbA1c",
        "FBS",
      ],
    },
    "profile-c": {
      title: "Good Health Profile",
      price: 1799,
      original: 5000,
      discount: "64% OFF",
      parameters: [
        "Thyroid Profile",
        "Lipid Profile",
        "Liver Profile",
        "Kidney Profile",
        "Urine-R",
        "Haemogram",
        "Blood Sugar-R",
        "HbA1C",
        "Vitamin B12",
        "Vitamin D3",
        "Iron Studies",
        "Calcium",
        "Sr Electrolyte",
      ],
    },
    iron: {
      title: "Iron Panel",
      price: 175,
      original: 600,
      discount: "71% OFF",
      parameters: ["Serum Iron", "TIBC", "Transferrin Saturation", "Ferritin"],
    },
  };

  const viewButtons = document.querySelectorAll(".btn-outline");

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const testKey = btn.getAttribute("data-test"); // get test key like profile-a

      const test = tests[testKey];
      if (!test) return;

      // Set content
      document.getElementById("drawerTitle").textContent = test.title;
      document.getElementById("drawerPrice").textContent = test.price;

      document.getElementById(
        "drawerOriginal"
      ).textContent = `₹${test.original}`;
      document.getElementById("drawerDiscount").textContent = test.discount;
      document.getElementById(
        "drawerParameters"
      ).textContent = `🧪 ${test.parameters.length} Parameters`;

      const paramList = document.getElementById("parameterList");
      paramList.innerHTML = "";
      test.parameters.forEach((param) => {
        const li = document.createElement("li");
        li.textContent = param;
        paramList.appendChild(li);
      });

      // Open Drawer
      drawer.classList.add("open");
    });
  });

  window.closeDrawer = function () {
    drawer.classList.remove("open");
  };
});
