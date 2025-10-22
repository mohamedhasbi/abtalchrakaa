// --- CONFIGURATION CONSTANTS ---
const BELT_RANKS = [
    { value: 'white', name: 'White', order: 1 },
    { value: 'yellow', name: 'Yellow', order: 2 },
    { value: 'green', name: 'Green', order: 3 },
    { value: 'blue', name: 'Blue', order: 4 },
    { value: 'blue-red', name: 'Blue with red stripe', order: 5 },
    { value: 'red', name: 'Red', order: 6 },
    { value: 'red-black', name: 'Red with black stripe', order: 7 },
    { value: 'red-two-black', name: 'Red with two black stripes', order: 8 },
    { value: 'black', name: 'Black', order: 9 },
];

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const AGE_CATEGORIES = [
    { name: 'Kids (Baraem)', minAge: 8, maxAge: 11 },
    { name: 'Teens (Fityan)', minAge: 12, maxAge: 14 },
    { name: 'Youth (Shabab)', minAge: 15, maxAge: 17 },
    { name: 'Adults (Kibar)', minAge: 18, maxAge: Infinity },
];

// --- TRANSLATION MAP ---
const TRANSLATIONS = {
    'en': {
        // App Title and Dashboard
        'app-title': 'Taekwondo Sharaqa Club',
        'total-members': 'Total Members',
        'unpaid-members': 'Unpaid This Month',
        'uninsured-members': 'Uninsured Players',
        'add-new-player': 'Add New Player',
        'player-list-title': 'Club Members List',
        'add-player-title': 'Add New Player',

        // Table Headers
        'th-name': 'Name',
        'th-age': 'Age',
        'th-belt': 'Belt',
        'th-category': 'Category',
        'th-paid': 'Paid',
        'th-insured': 'Insured',
        'th-actions': 'Actions',

        // Filters
        'filter-all': 'All Players',
        'filter-male': 'Male Players',
        'filter-female': 'Female Players',
        'filter-unpaid': 'Unpaid Players',
        'filter-uninsured': 'Uninsured Players',

        // Buttons
        'print-paid': 'Paid List',
        'print-unpaid': 'Unpaid List',
        'print-uninsured': 'Uninsured List',
        'btn-add': 'Add Player',
        'btn-save': 'Save Changes',
        'btn-cancel': 'Cancel',
        'btn-edit': 'Edit',
        'btn-delete': 'Delete',

        // Form Labels
        'label-image': 'Player Image',
        'image-note': 'Upload or drag and drop image here.',
        'label-fullname': 'Full Name *',
        'label-gender': 'Gender *',
        'gender-male': 'Male',
        'gender-female': 'Female',
        'label-birthdate': 'Birthdate *',
        'label-height': 'Height (cm)',
        'label-weight': 'Weight (kg)',
        'label-id': 'CIN / Birth Cert. No.',
        'label-belt': 'Belt Rank *',
        'label-insurance-type': 'Insurance Type',
        'insurance-none': 'None',
        'insurance-university': 'University Insurance',
        'insurance-private': 'Private Company Insurance',
        'label-insurance-number': 'Insurance Number',
        'label-payment-tracker': 'Monthly Payment Tracker (Check Paid Months)',

        // Belt Ranks
        'belt-white': 'White',
        'belt-yellow': 'Yellow',
        'belt-green': 'Green',
        'belt-blue': 'Blue',
        'belt-blue-red': 'Blue with red stripe',
        'belt-red': 'Red',
        'belt-red-black': 'Red with black stripe',
        'belt-red-two-black': 'Red with two black stripes',
        'belt-black': 'Black',

        // Age Categories
        'category-kids': 'Kids (Baraem)',
        'category-teens': 'Teens (Fityan)',
        'category-youth': 'Youth (Shabab)',
        'category-adults': 'Adults (Kibar)',
    },
    'fr': {
        // App Title and Dashboard
        'app-title': 'Club Taekwondo Sharaqa',
        'total-members': 'Membres Totaux',
        'unpaid-members': 'Impayés ce Mois-ci',
        'uninsured-members': 'Joueurs Non Assurés',
        'add-new-player': 'Ajouter Nouveau Joueur',
        'player-list-title': 'Liste des Membres du Club',
        'add-player-title': 'Ajouter Nouveau Joueur',

        // Table Headers
        'th-name': 'Nom',
        'th-age': 'Âge',
        'th-belt': 'Ceinture',
        'th-category': 'Catégorie',
        'th-paid': 'Payé',
        'th-insured': 'Assuré',
        'th-actions': 'Actions',

        // Filters
        'filter-all': 'Tous les Joueurs',
        'filter-male': 'Joueurs Masculins',
        'filter-female': 'Joueurs Féminins',
        'filter-unpaid': 'Joueurs Impayés',
        'filter-uninsured': 'Joueurs Non Assurés',

        // Buttons
        'print-paid': 'Liste Payée',
        'print-unpaid': 'Liste Impayée',
        'print-uninsured': 'Liste Non Assurée',
        'btn-add': 'Ajouter Joueur',
        'btn-save': 'Enregistrer',
        'btn-cancel': 'Annuler',
        'btn-edit': 'Modifier',
        'btn-delete': 'Supprimer',

        // Form Labels
        'label-image': 'Image du Joueur',
        'image-note': 'Téléchargez ou glissez-déposez l\'image ici.',
        'label-fullname': 'Nom Complet *',
        'label-gender': 'Sexe *',
        'gender-male': 'Homme',
        'gender-female': 'Femme',
        'label-birthdate': 'Date de Naissance *',
        'label-height': 'Taille (cm)',
        'label-weight': 'Poids (kg)',
        'label-id': 'CIN / Cert. de Naissance',
        'label-belt': 'Grade de Ceinture *',
        'label-insurance-type': 'Type d\'Assurance',
        'insurance-none': 'Aucune',
        'insurance-university': 'Assurance Universitaire',
        'insurance-private': 'Assurance Compagnie Privée',
        'label-insurance-number': 'Numéro d\'Assurance',
        'label-payment-tracker': 'Suivi des Paiements Mensuels (Cocher les Mois Payés)',

        // Belt Ranks (Names remain as Taekwondo terms for clarity)
        'belt-white': 'Blanc',
        'belt-yellow': 'Jaune',
        'belt-green': 'Vert',
        'belt-blue': 'Bleu',
        'belt-blue-red': 'Bleu avec bande rouge',
        'belt-red': 'Rouge',
        'belt-red-black': 'Rouge avec bande noire',
        'belt-red-two-black': 'Rouge avec deux bandes noires',
        'belt-black': 'Noir',
        
        // Age Categories
        'category-kids': 'Enfants (Baraem)',
        'category-teens': 'Adolescents (Fityan)',
        'category-youth': 'Jeunes (Shabab)',
        'category-adults': 'Adultes (Kibar)',
    },
    'ar': {
        // App Title and Dashboard
        'app-title': 'نادي الشروق للتايكواندو',
        'total-members': 'إجمالي الأعضاء',
        'unpaid-members': 'لم يدفعوا هذا الشهر',
        'uninsured-members': 'لاعبون غير مؤمن عليهم',
        'add-new-player': 'إضافة لاعب جديد',
        'player-list-title': 'قائمة أعضاء النادي',
        'add-player-title': 'إضافة لاعب جديد',

        // Table Headers
        'th-name': 'الاسم',
        'th-age': 'العمر',
        'th-belt': 'الحزام',
        'th-category': 'الفئة',
        'th-paid': 'مدفوع',
        'th-insured': 'مؤمن عليه',
        'th-actions': 'الإجراءات',

        // Filters
        'filter-all': 'جميع اللاعبين',
        'filter-male': 'اللاعبون الذكور',
        'filter-female': 'اللاعبات الإناث',
        'filter-unpaid': 'اللاعبون غير المدفوعين',
        'filter-uninsured': 'اللاعبون غير المؤمن عليهم',

        // Buttons
        'print-paid': 'قائمة الدفع',
        'print-unpaid': 'قائمة غير المدفوع',
        'print-uninsured': 'قائمة غير المؤمن عليهم',
        'btn-add': 'إضافة لاعب',
        'btn-save': 'حفظ التغييرات',
        'btn-cancel': 'إلغاء',
        'btn-edit': 'تعديل',
        'btn-delete': 'حذف',

        // Form Labels
        'label-image': 'صورة اللاعب',
        'image-note': 'قم بتحميل أو سحب وإسقاط الصورة هنا.',
        'label-fullname': 'الاسم الكامل *',
        'label-gender': 'النوع *',
        'gender-male': 'ذكر',
        'gender-female': 'أنثى',
        'label-birthdate': 'تاريخ الميلاد *',
        'label-height': 'الطول (سم)',
        'label-weight': 'الوزن (كجم)',
        'label-id': 'رقم ب.و. / شهادة الميلاد',
        'label-belt': 'رتبة الحزام *',
        'label-insurance-type': 'نوع التأمين',
        'insurance-none': 'لا يوجد',
        'insurance-university': 'تأمين جامعي',
        'insurance-private': 'تأمين شركة خاصة',
        'label-insurance-number': 'رقم التأمين',
        'label-payment-tracker': 'تتبع الدفعات الشهرية (حدد الأشهر المدفوعة)',
        
        // Belt Ranks
        'belt-white': 'أبيض',
        'belt-yellow': 'أصفر',
        'belt-green': 'أخضر',
        'belt-blue': 'أزرق',
        'belt-blue-red': 'أزرق بشريط أحمر',
        'belt-red': 'أحمر',
        'belt-red-black': 'أحمر بشريط أسود',
        'belt-red-two-black': 'أحمر بشريطين أسودين',
        'belt-black': 'أسود',

        // Age Categories
        'category-kids': 'أطفال (براعم)',
        'category-teens': 'مراهقون (فتيان)',
        'category-youth': 'شباب (شباب)',
        'category-adults': 'بالغون (كبار)',
    }
};

let currentLanguage = localStorage.getItem('clubLang') || 'en';

// --- UTILITY FUNCTIONS ---

/**
 * Calculates the age from a birthdate string.
 * @param {string} birthdate - Date string (YYYY-MM-DD).
 * @returns {number} Age in years.
 */
function calculateAge(birthdate = document.getElementById('birthdate')?.value) {
    if (!birthdate) return 0;
    const today = new Date();
    const dob = new Date(birthdate);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    const ageDisplay = document.getElementById('calculated-age');
    if (ageDisplay) {
        ageDisplay.textContent = age > 0 ? `Age: ${age}` : '';
    }
    return age;
}

/**
 * Determines the age category based on age.
 * @param {number} age - Player's age.
 * @returns {string} The name of the age category.
 */
function getAgeCategory(age) {
    for (const cat of AGE_CATEGORIES) {
        if (age >= cat.minAge && age <= cat.maxAge) {
            // Translate category name
            const key = `category-${cat.name.split(' ')[0].toLowerCase().replace(/\(.+\)/, '').trim()}`; // e.g., 'category-kids'
            return translate(key);
        }
    }
    return 'N/A';
}

/**
 * Gets players data from LocalStorage.
 * @returns {Array<Object>} List of player objects.
 */
function getPlayers() {
    return JSON.parse(localStorage.getItem('taekwondoPlayers')) || [];
}

/**
 * Saves the players array to LocalStorage.
 * @param {Array<Object>} players - List of player objects.
 */
function savePlayers(players) {
    localStorage.setItem('taekwondoPlayers', JSON.stringify(players));
    updateDashboardSummary(players);
    renderPlayerTable(players);
}

/**
 * Handles adding or updating a player.
 * @param {Event} event - The form submission event.
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Simple validation
    const fullName = document.getElementById('full-name').value;
    const birthdate = document.getElementById('birthdate').value;
    const beltRank = document.getElementById('belt-rank').value;
    if (!fullName || !birthdate || !beltRank) {
        alert("Please fill in all required fields (Full Name, Birthdate, Belt Rank).");
        return;
    }

    const playerId = document.getElementById('player-id').value;
    const isEditing = !!playerId;
    const age = calculateAge(birthdate);
    const insuranceType = document.getElementById('insurance-type').value;

    const paidMonths = Array.from(document.querySelectorAll('#month-checkboxes input:checked')).map(cb => cb.value);

    // Image handling: store as Data URL (Base64)
    let playerImageBase64 = document.getElementById('image-preview').style.backgroundImage.slice(5, -2);
    if(playerImageBase64.startsWith('url')) { // Check if it's the placeholder URL
        playerImageBase64 = '';
    }

    const newPlayer = {
        id: isEditing ? playerId : Date.now().toString(),
        image: playerImageBase64,
        fullName: fullName,
        gender: document.getElementById('gender').value,
        birthdate: birthdate,
        age: age,
        ageCategory: getAgeCategory(age),
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        cin: document.getElementById('cin').value,
        beltRank: beltRank,
        insuranceType: insuranceType,
        insuranceNumber: document.getElementById('insurance-number').value,
        paidMonths: paidMonths,
    };

    let players = getPlayers();

    if (isEditing) {
        // Edit existing player
        const index = players.findIndex(p => p.id === playerId);
        if (index > -1) {
            players[index] = newPlayer;
        }
    } else {
        // Add new player
        players.push(newPlayer);
    }

    savePlayers(players);
    resetForm();
    alert(isEditing ? "Player updated successfully!" : "New player added successfully!");
}

/**
 * Resets the player form and changes the title/button text back to 'Add'.
 */
function resetForm() {
    document.getElementById('player-form').reset();
    document.getElementById('player-id').value = '';
    document.getElementById('form-title').textContent = translate('add-player-title');
    document.getElementById('save-btn').textContent = translate('btn-add');
    document.getElementById('image-preview').style.backgroundImage = 'none';
    document.getElementById('calculated-age').textContent = '';
}

/**
 * Populates the form with existing player data for editing.
 * @param {string} playerId - The ID of the player to edit.
 */
function editPlayer(playerId) {
    const player = getPlayers().find(p => p.id === playerId);
    if (!player) return;

    // Smooth scroll to form and update UI text
    document.getElementById('player-form-section').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('form-title').textContent = `${translate('btn-edit')}: ${player.fullName}`;
    document.getElementById('save-btn').textContent = translate('btn-save');

    // Populate fields
    document.getElementById('player-id').value = player.id;
    document.getElementById('full-name').value = player.fullName;
    document.getElementById('gender').value = player.gender;
    document.getElementById('birthdate').value = player.birthdate;
    calculateAge(player.birthdate); // Re-calculate and display age
    document.getElementById('height').value = player.height;
    document.getElementById('weight').value = player.weight;
    document.getElementById('cin').value = player.cin;
    document.getElementById('belt-rank').value = player.beltRank;
    document.getElementById('insurance-type').value = player.insuranceType;
    document.getElementById('insurance-number').value = player.insuranceNumber;

    // Handle Image Preview
    document.getElementById('image-preview').style.backgroundImage = player.image ? `url('${player.image}')` : 'none';

    // Handle Payment Checkboxes
    const monthCheckboxes = document.querySelectorAll('#month-checkboxes input[type="checkbox"]');
    monthCheckboxes.forEach(cb => {
        cb.checked = player.paidMonths && player.paidMonths.includes(cb.value);
    });
}

/**
 * Deletes a player after confirmation.
 * @param {string} playerId - The ID of the player to delete.
 */
function deletePlayer(playerId) {
    const players = getPlayers();
    const player = players.find(p => p.id === playerId);
    if (player && confirm(`Are you sure you want to delete ${player.fullName}?`)) {
        const updatedPlayers = players.filter(p => p.id !== playerId);
        savePlayers(updatedPlayers);
        alert(`${player.fullName} has been deleted.`);
        resetForm(); // Reset form in case the deleted player was being edited
    }
}

/**
 * Filters and renders the player table.
 * @param {string} filterType - The type of filter ('all', 'male', 'female', 'unpaid', 'uninsured').
 */
function renderPlayerTable(players = getPlayers(), filterType = 'all') {
    const tbody = document.getElementById('players-table-body');
    tbody.innerHTML = '';
    const currentMonth = MONTH_NAMES[new Date().getMonth()].toLowerCase();

    // Filtering Logic
    const filteredPlayers = players.filter(player => {
        const isPaid = player.paidMonths.includes(currentMonth);
        const isInsured = player.insuranceType !== '';

        switch (filterType) {
            case 'male': return player.gender === 'male';
            case 'female': return player.gender === 'female';
            case 'unpaid': return !isPaid;
            case 'uninsured': return !isInsured;
            case 'all':
            default: return true;
        }
    }).sort((a, b) => {
        // Sort by belt rank order
        const rankA = BELT_RANKS.find(r => r.value === a.beltRank)?.order || 99;
        const rankB = BELT_RANKS.find(r => r.value === b.beltRank)?.order || 99;
        return rankA - rankB;
    });

    // Translation for display
    const translateBelt = (value) => {
        const rank = BELT_RANKS.find(r => r.value === value);
        return rank ? translate(`belt-${rank.value}`) : value;
    };
    
    if (filteredPlayers.length === 0) {
        const row = tbody.insertRow();
        row.innerHTML = `<td colspan="7" style="text-align:center;">${translate('no-players-match')}</td>`;
        return;
    }

    filteredPlayers.forEach(player => {
        const row = tbody.insertRow();
        const isPaid = player.paidMonths.includes(currentMonth);
        const isInsured = player.insuranceType !== '';

        row.innerHTML = `
            <td>${player.fullName}</td>
            <td>${calculateAge(player.birthdate)}</td>
            <td>${translateBelt(player.beltRank)}</td>
            <td>${getAgeCategory(player.age)}</td>
            <td>${isPaid ? '✅' : '❌'}</td>
            <td>${isInsured ? '✅' : '❌'}</td>
            <td class="action-btns">
                <button title="${translate('btn-edit')}" onclick="editPlayer('${player.id}')"><i class="fas fa-edit"></i></button>
                <button title="${translate('btn-delete')}" onclick="deletePlayer('${player.id}')"><i class="fas fa-trash"></i></button>
            </td>
        `;
    });
}

// Global function to be called from HTML onclick
window.filterPlayers = renderPlayerTable;

/**
 * Updates the counts in the dashboard summary boxes.
 * @param {Array<Object>} players - List of player objects.
 */
function updateDashboardSummary(players) {
    const currentMonth = MONTH_NAMES[new Date().getMonth()].toLowerCase();

    const totalMembers = players.length;
    const unpaidCount = players.filter(p => !p.paidMonths.includes(currentMonth)).length;
    const uninsuredCount = players.filter(p => p.insuranceType === '').length;

    document.getElementById('members-count').textContent = totalMembers;
    document.getElementById('unpaid-count').textContent = unpaidCount;
    document.getElementById('uninsured-count').textContent = uninsuredCount;
}

// --- INITIALIZATION FUNCTIONS ---

/**
 * Populates belt rank and month checkboxes in the form.
 */
function populateFormOptions() {
    const beltSelect = document.getElementById('belt-rank');
    BELT_RANKS.forEach(rank => {
        const option = document.createElement('option');
        option.value = rank.value;
        option.textContent = rank.name; // Initial text, will be translated later
        option.dataset.key = `belt-${rank.value}`;
        beltSelect.appendChild(option);
    });

    const monthCheckboxesDiv = document.getElementById('month-checkboxes');
    MONTH_NAMES.forEach((month, index) => {
        const monthValue = month.toLowerCase();
        const monthDiv = document.createElement('div');
        monthDiv.innerHTML = `
            <input type="checkbox" id="month-${monthValue}" name="paidMonths" value="${monthValue}">
            <label for="month-${monthValue}">${month}</label>
        `;
        monthCheckboxesDiv.appendChild(monthDiv);
    });
}

/**
 * Translates all elements with a data-key attribute based on the current language.
 * @param {string} lang - The target language code.
 */
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-key]');
    const isArabic = lang === 'ar';
    document.body.dir = isArabic ? 'rtl' : 'ltr';

    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        }
    });
    
    // Special case for input placeholders/titles
    document.getElementById('app-title').textContent = TRANSLATIONS[lang]['app-title'];
    document.getElementById('lang-switcher').value = lang;
    
    // Re-render table and summary after language change
    renderPlayerTable();
    updateDashboardSummary(getPlayers());
}

/**
 * Translates a single key.
 * @param {string} key - The key to translate.
 * @returns {string} The translated string or the key itself if not found.
 */
function translate(key) {
    return (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) || key;
}

// --- EVENT LISTENERS ---

function setupEventListeners() {
    // Language Switcher
    document.getElementById('lang-switcher').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('clubLang', currentLanguage);
        applyTranslations(currentLanguage);
    });

    // Dark Mode Toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('clubTheme', newTheme);
        document.querySelector('#theme-toggle i').className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
    
    // Print/Export Functionality
    document.getElementById('print-paid').addEventListener('click', () => printList('paid'));
    document.getElementById('print-unpaid').addEventListener('click', () => printList('unpaid'));
    document.getElementById('print-uninsured').addEventListener('click', () => printList('uninsured'));

    // Allow clicking on image preview to open file dialog
    document.getElementById('image-preview').addEventListener('click', () => {
        document.getElementById('player-image').click();
    });
}

/**
 * Previews the image selected in the file input.
 * @param {Event} event - The change event from the file input.
 */
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('image-preview').style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
    } else {
        document.getElementById('image-preview').style.backgroundImage = 'none';
    }
}
window.previewImage = previewImage; // Make accessible globally

/**
 * Creates a printable version of a filtered list and opens the print dialog.
 * @param {string} filterType - 'paid', 'unpaid', or 'uninsured'.
 */
function printList(filterType) {
    const players = getPlayers();
    const currentMonth = MONTH_NAMES[new Date().getMonth()].toLowerCase();

    let titleKey;
    let filtered;

    switch (filterType) {
        case 'paid':
            titleKey = 'Paid Players List for ' + currentMonth.toUpperCase();
            filtered = players.filter(p => p.paidMonths.includes(currentMonth));
            break;
        case 'unpaid':
            titleKey = 'Unpaid Players List for ' + currentMonth.toUpperCase();
            filtered = players.filter(p => !p.paidMonths.includes(currentMonth));
            break;
        case 'uninsured':
            titleKey = 'Uninsured Players List';
            filtered = players.filter(p => p.insuranceType === '');
            break;
        default:
            return;
    }
    
    // Simple table creation for printing
    let tableHTML = `
        <style>
            body { font-family: sans-serif; }
            h1 { color: #D10000; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #333; padding: 8px; text-align: left; }
            th { background-color: #f0f0f0; }
        </style>
        <h1>${translate('app-title')} - ${titleKey}</h1>
        <table>
            <thead>
                <tr>
                    <th>${translate('th-name')}</th>
                    <th>${translate('th-age')}</th>
                    <th>${translate('th-belt')}</th>
                    <th>${translate('th-category')}</th>
                    <th>${translate('th-id')}</th>
                </tr>
            </thead>
            <tbody>
    `;

    filtered.forEach(p => {
        tableHTML += `
            <tr>
                <td>${p.fullName}</td>
                <td>${calculateAge(p.birthdate)}</td>
                <td>${translate(`belt-${p.beltRank}`)}</td>
                <td>${getAgeCategory(p.age)}</td>
                <td>${p.cin || p.birthCertificateNumber || 'N/A'}</td>
            </tr>
        `;
    });

    tableHTML += `</tbody></table>`;

    // Open new window for printing
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>' + titleKey + '</title></head><body>');
    printWindow.document.write(tableHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

/**
 * Initializes the application: loads data, sets theme/language, renders tables.
 */
function init() {
    // 1. Check for basic login (very simple protection for this client-side demo)
    if (window.location.pathname.endsWith('index.html') && !localStorage.getItem('isLoggedIn')) {
        // window.location.href = 'login.html';
        // In a real app, this would redirect. For the sake of this code demo, we'll bypass.
        // For local testing, ensure 'login.html' is handled as per the structure.
        localStorage.setItem('isLoggedIn', 'true'); 
    }
    
    // 2. Load Theme
    const savedTheme = localStorage.getItem('clubTheme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    document.querySelector('#theme-toggle i').className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    // 3. Populate Form Options
    populateFormOptions();

    // 4. Apply Initial Language
    const savedLang = localStorage.getItem('clubLang') || 'en';
    document.getElementById('lang-switcher').value = savedLang;
    currentLanguage = savedLang;
    applyTranslations(currentLanguage);

    // 5. Load and Render Data
    const initialPlayers = getPlayers();
    updateDashboardSummary(initialPlayers);
    renderPlayerTable(initialPlayers);

    // 6. Setup Event Listeners
    setupEventListeners();
    
    // Expose functions globally for HTML calls
    window.handleFormSubmit = handleFormSubmit;
    window.editPlayer = editPlayer;
    window.deletePlayer = deletePlayer;
    window.resetForm = resetForm;
    window.calculateAge = calculateAge;
    window.showPlayerList = () => document.querySelector('.player-list-section').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', init);