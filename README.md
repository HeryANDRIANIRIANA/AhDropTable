# AhDropTable

> Un plugin jQuery simple pour afficher un tableau DataTables dans un menu déroulant Bootstrap stylisé.

## 🔧 Démo

[👉 Voir la démo sur CodePen ou GitHub Pages](https://heryandrianiriana.github.io/AhDropTable/docs/)

Ajoutez ces scripts à votre page HTML :

```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Bootstrap CSS + JS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- DataTables -->
<link href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css" rel="stylesheet">
<script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.3.6/js/buttons.colVis.min.js"></script>

<!-- Feather Icons -->
<script src="https://unpkg.com/feather-icons"></script>

<!-- AhDropTable -->
<script src="dist/jquery.ahdroptable.js"></script>
````

## 🧪 Utilisation

Ajoutez un conteneur HTML vide :

```html
<div id="myDropTable"></div>
```

Initialisez le plugin :

```js
$('#myDropTable').AhDropTable();
```

### Avec données personnalisées :

```js
let table = new AhDropTable("#myDropTable");
table.setData([
  { name: "Alice", position: "Dev", salary: "$4000", start_date: "2022/01/01", office: "Paris", extn: "1023" }
]);
```

## ⚙️ Options (à venir)

* `pplIcon`
* `colvisIcon`

## 📦 Dépendances

* jQuery
* Bootstrap (v4 ou v5)
* DataTables + extensions (buttons, colVis)
* Feather icons (ou remplaçables)

## 📝 Licence

MIT License

---

## 📄 À faire

* [ ] Ajouter plus d'options personnalisables
* [ ] Ajouter une animation de chargement
* [ ] Support mobile amélioré
