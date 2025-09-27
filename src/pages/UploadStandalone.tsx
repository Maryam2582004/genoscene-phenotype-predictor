import React from 'react';

const UploadStandalone: React.FC = () => {
  React.useEffect(() => {
    // Add the complete styles to the head
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --bg: #0f172a;
        --card: #111827;
        --ink: #e5e7eb;
        --muted: #9ca3af;
        --accent: #22d3ee;
        --good: #10b981;
        --warn: #f59e0b;
        --bad: #ef4444;
        --primary: #3b82f6;
        --secondary: #6366f1;
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      .upload-standalone {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(180deg, #0b1024, #0f172a 40%, #020617 100%);
        color: var(--ink);
        min-height: 100vh;
        line-height: 1.6;
      }
      
      .wrap {
        max-width: 1200px;
        margin: 24px auto;
        padding: 16px;
      }
      
      .topbar {
        display: flex;
        align-items: center;
        gap: 12px;
        justify-content: space-between;
        margin-bottom: 16px;
        flex-wrap: wrap;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .logo-text {
        font-size: 22px;
        font-weight: 800;
        background: linear-gradient(135deg, #22d3ee, #14b8a6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .badge {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 6px 12px;
        border-radius: 999px;
        font-size: 12px;
        color: var(--muted);
      }
      
      .lang {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      
      .lang button {
        background: #1f2937;
        border: 1px solid #374151;
        color: #e5e7eb;
        padding: 8px 12px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }
      
      .lang button:hover {
        background: #374151;
      }
      
      .card {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        margin-bottom: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      }
      
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      
      @media (max-width: 968px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }
      
      .row {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 16px;
      }
      
      input[type="text"], input[type="file"] {
        background: #0b1220;
        border: 1px solid #1f2937;
        color: #e5e7eb;
        padding: 12px 16px;
        border-radius: 10px;
        min-width: 220px;
        flex: 1;
        transition: border-color 0.3s;
        font-size: 14px;
      }
      
      input[type="text"]:focus, input[type="file"]:focus {
        outline: none;
        border-color: #22d3ee;
      }
      
      .btn {
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        border: none;
        color: white;
        padding: 12px 18px;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      
      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
      
      .btn.muted {
        background: #1f2937;
        color: #e5e7eb;
        border: 1px solid #374151;
      }
      
      .btn.muted:hover {
        background: #374151;
      }
      
      .btn.accent {
        background: linear-gradient(135deg, #14b8a6, #22d3ee);
      }
      
      .section-title {
        font-weight: 700;
        letter-spacing: 0.2px;
        margin: 0 0 20px;
        font-size: 1.5rem;
        color: #22d3ee;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .section-title svg {
        width: 24px;
        height: 24px;
      }
      
      .avatar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 380px;
        background: radial-gradient(
          ellipse at 50% -20%,
          rgba(34, 211, 238, 0.1),
          transparent 60%
        );
        border-radius: 14px;
        position: relative;
        overflow: hidden;
        padding: 20px;
      }
      
      .avatar-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          rgba(34, 211, 238, 0.1),
          transparent 50%,
          rgba(34, 211, 238, 0.1)
        );
        pointer-events: none;
      }
      
      .generated-face {
        width: 100%;
        max-width: 280px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease;
      }
      
      .generated-face:hover {
        transform: scale(1.02);
      }
      
      .face-placeholder {
        width: 100%;
        height: 280px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        border: 2px dashed rgba(255, 255, 255, 0.1);
        color: var(--muted);
        font-size: 14px;
        text-align: center;
        padding: 20px;
      }
      
      .chart {
        display: flex;
        gap: 16px;
        align-items: flex-end;
        height: 180px;
        padding: 16px;
        border-radius: 12px;
        background: #0b1220;
        border: 1px solid #1f2937;
        margin-bottom: 20px;
      }
      
      .bar {
        width: 30%;
        background: linear-gradient(
          180deg,
          rgba(34, 211, 238, 0.8),
          rgba(34, 211, 238, 0.35)
        );
        border: 1px solid rgba(34, 211, 238, 0.5);
        border-radius: 10px 10px 4px 4px;
        position: relative;
        transition: height 0.5s ease;
      }
      
      .bar span {
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 13px;
        color: #022c33;
        font-weight: 800;
      }
      
      .bar::after {
        content: attr(data-label);
        position: absolute;
        bottom: -26px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 13px;
        color: var(--muted);
      }
      
      .traits-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-top: 16px;
      }
      
      @media (max-width: 768px) {
        .traits-list {
          grid-template-columns: 1fr;
        }
      }
      
      .trait-pill {
        background: #0b1220;
        border: 1px solid #1f2937;
        color: #e5e7eb;
        padding: 14px;
        border-radius: 12px;
        font-size: 15px;
        text-align: center;
        transition: all 0.3s ease;
      }
      
      .trait-pill:hover {
        transform: translateY(-2px);
        border-color: #22d3ee;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
      
      .trait-details {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 20px;
      }
      
      @media (max-width: 968px) {
        .trait-details {
          grid-template-columns: 1fr;
        }
      }
      
      .trait-category {
        background: #0b1220;
        border: 1px solid #1f2937;
        border-radius: 12px;
        padding: 16px;
      }
      
      .trait-category h4 {
        margin-bottom: 12px;
        color: #22d3ee;
        font-size: 16px;
        font-weight: 600;
      }
      
      .probability-bar {
        margin-bottom: 12px;
      }
      
      .probability-bar .label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
        font-size: 13px;
      }
      
      .probability-bar .bar-container {
        background: #1f2937;
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
      }
      
      .probability-bar .bar-fill {
        background: linear-gradient(90deg, #14b8a6, #22d3ee);
        height: 100%;
        border-radius: 4px;
        transition: width 0.5s ease;
      }
      
      .file-upload {
        position: relative;
        display: inline-block;
        cursor: pointer;
      }
      
      .file-upload input[type="file"] {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      
      .file-info {
        margin-top: 8px;
        font-size: 13px;
        color: var(--muted);
      }
      
      .processing-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(2, 6, 23, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        flex-direction: column;
        gap: 20px;
        backdrop-filter: blur(10px);
      }
      
      .processing-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        border-top-color: #22d3ee;
        animation: spin 1s linear infinite;
      }
      
      .processing-text {
        color: #e5e7eb;
        font-size: 18px;
        font-weight: 500;
      }
      
      .hidden {
        display: none;
      }
      
      footer {
        color: #64748b;
        font-size: 13px;
        text-align: center;
        margin-top: 30px;
        padding: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
      }
      
      /* Animations */
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes slideIn {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      /* RTL support */
      [dir="rtl"] {
        text-align: right;
      }
      
      [dir="rtl"] .row {
        flex-direction: row-reverse;
      }
      
      [dir="rtl"] .traits-list {
        direction: rtl;
      }

      /* إضافة أنماط للعناصر الجديدة */
      .info-card {
        margin-bottom: 30px;
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.05), rgba(20, 184, 166, 0.05));
        border: 1px solid rgba(34, 211, 238, 0.2);
      }

      .info-content p {
        margin-bottom: 20px;
        line-height: 1.7;
        color: #e5e7eb;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-top: 20px;
      }

      .feature-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 10px;
        transition: all 0.3s ease;
      }

      .feature-item:hover {
        background: rgba(34, 211, 238, 0.1);
        border-color: rgba(34, 211, 238, 0.3);
        transform: translateY(-2px);
      }

      .feature-item svg {
        color: #22d3ee;
        flex-shrink: 0;
      }

      .feature-item span {
        font-size: 14px;
        font-weight: 500;
      }

      .card {
        position: relative;
        overflow: hidden;
      }

      .card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s;
      }

      .card:hover::before {
        left: 100%;
      }
    `;
    document.head.appendChild(style);

    // Initialize the application
    const initScript = () => {
      (window as any).state = {
        lang: 'en',
        probs: {
          hair: {brown: 0.4, blonde: 0.3, black: 0.3}, 
          eye: {brown: 0.5, blue: 0.3, green: 0.2}, 
          skin: {light: 0.4, medium: 0.4, dark: 0.2}
        },
        hasPrediction: false
      };

      // Rest of the JavaScript functions
      (window as any).tSync = function() {
        document.querySelectorAll('[data-en]').forEach((el: any) => {
          if (el.getAttribute('data-en') && el.getAttribute('data-ar')) {
            el.textContent = (window as any).state.lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ar');
          }
        });
        const langLabel = document.getElementById('langLabel');
        if (langLabel) langLabel.textContent = (window as any).state.lang.toUpperCase();
        (window as any).updateDynamicLabels();
      };

      (window as any).toggleLang = function() {
        (window as any).state.lang = (window as any).state.lang === 'en' ? 'ar' : 'en';
        document.documentElement.dir = (window as any).state.lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = (window as any).state.lang;
        (window as any).tSync();
      };

      (window as any).handleFileSelect = function(event: any) {
        const fileInput = event.target;
        const fileInfo = document.getElementById(fileInput.id + 'Info');
        
        if (fileInput.files.length > 0) {
          const file = fileInput.files[0];
          if (fileInfo) {
            fileInfo.textContent = `${file.name} (${(window as any).formatFileSize(file.size)})`;
            fileInfo.style.color = '#22d3ee';
          }
          const nameLower = file.name.toLowerCase();
          if (nameLower.endsWith('.csv')) {
            (window as any).parseCSVFile(file);
          } else {
            (window as any).state.hasPrediction = false;
          }
        } else {
          if (fileInfo) fileInfo.textContent = '';
        }
      };

      (window as any).formatFileSize = function(bytes: number) {
        if (bytes < 1024) return bytes + ' bytes';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        else return (bytes / 1048576).toFixed(1) + ' MB';
      };

      (window as any).computePhenotypeProbs = function(sample: any) {
        let eyeBlue = 1, eyeBrown = 1, eyeGreen = 1;
        if (sample['rs12913832_T']) {
          eyeBlue += 3;
        } else {
          eyeBrown += 2;
        }
        if (sample['rs12896399_T']) {
          eyeGreen += 1;
        }
        if (sample['rs1393350_T']) {
          eyeBlue += 0.5;
        }
        const eyeSum = eyeBlue + eyeBrown + eyeGreen;
        const eye = {
          blue: eyeBlue / eyeSum,
          brown: eyeBrown / eyeSum,
          green: eyeGreen / eyeSum
        };

        let hairBlonde = 1, hairBrown = 1, hairBlack = 1;
        if (sample['rs12821256_G']) hairBlonde += 1;
        if (sample['rs12203592_T']) hairBlonde += 0.8;
        if (sample['rs1393350_T']) hairBlonde += 0.5;
        if (sample['rs683_G']) hairBlonde += 0.3;
        if (sample['rs16891982_C']) hairBrown += 0.5;
        if (sample['rs1805008_T'] || sample['rs1805005_T'] || sample['rs1805006_A'] || sample['rs1805007_T'] || sample['rs1805009_C']) {
          hairBrown += 1;
        }
        const hairSum = hairBlonde + hairBrown + hairBlack;
        const hair = {
          blonde: hairBlonde / hairSum,
          brown: hairBrown / hairSum,
          black: hairBlack / hairSum
        };

        let lightScore = 1, darkScore = 1;
        if (sample['rs1426654_G']) {
          darkScore += 2;
        } else {
          lightScore += 1;
        }
        if (sample['rs16891982_C']) {
          lightScore += 2;
        } else {
          darkScore += 1;
        }
        if (sample['rs6119471_C']) {
          lightScore += 1;
        } else {
          darkScore += 0.5;
        }
        if (sample['rs1545397_T']) {
          lightScore += 1;
        } else {
          darkScore += 0.5;
        }
        const skinSum = lightScore + darkScore;
        let skinLight = lightScore / skinSum;
        let skinDark = darkScore / skinSum;
        let skinMedium = 1 - skinLight - skinDark;
        if (skinMedium < 0) skinMedium = 0;
        const skin = {
          light: skinLight,
          medium: skinMedium,
          dark: skinDark
        };
        return { hair, eye, skin };
      };

      (window as any).parseCSVFile = function(file: File) {
        const reader = new FileReader();
        reader.onload = function(e: any) {
          const text = e.target.result.trim();
          const lines = text.split(/\r?\n/);
          if (lines.length < 2) {
            alert((window as any).state.lang === 'en' ? 'CSV file must contain at least one data row.' : 'يجب أن يحتوي ملف CSV على صف بيانات واحد على الأقل.');
            return;
          }
          const header = lines[0].split(',');
          const row = lines[1].split(',');
          const sample: any = {};
          for (let i = 0; i < header.length; i++) {
            const key = header[i].trim();
            const value = row[i] ? row[i].trim() : '';
            if (value && value !== 'NA' && value !== '0') {
              sample[key] = value;
            }
          }
          const probs = (window as any).computePhenotypeProbs(sample);
          (window as any).state.probs = probs;
          (window as any).state.hasPrediction = true;
          const generateBtn = document.getElementById('generateFaceBtn') as HTMLButtonElement;
          if (generateBtn) generateBtn.disabled = false;
          (window as any).render();
        };
        reader.onerror = function() {
          alert((window as any).state.lang === 'en' ? 'Failed to read the CSV file.' : 'فشل في قراءة ملف CSV');
        };
        reader.readAsText(file);
      };

      (window as any).showLoading = function() {
        const overlay = document.getElementById('processingOverlay');
        if (overlay) overlay.classList.remove('hidden');
      };

      (window as any).hideLoading = function() {
        const overlay = document.getElementById('processingOverlay');
        if (overlay) overlay.classList.add('hidden');
      };

      (window as any).loadDemo = function() {
        const sampleInput = document.getElementById('sampleId') as HTMLInputElement;
        const fileInfo = document.getElementById('vcfFileInfo');
        if (sampleInput) sampleInput.value = 'DEMO-FTDNA-001';
        if (fileInfo) fileInfo.textContent = 'demo_snps.csv (0.1 MB)';
        
        (window as any).state.probs = {
          hair: {brown: 0.62, blonde: 0.18, black: 0.20},
          eye: {brown: 0.55, blue: 0.25, green: 0.20},
          skin: {light: 0.35, medium: 0.45, dark: 0.20}
        };
        (window as any).state.hasPrediction = true;
        const generateBtn = document.getElementById('generateFaceBtn') as HTMLButtonElement;
        if (generateBtn) generateBtn.disabled = false;
        (window as any).render();
      };

      (window as any).predict = function() {
        const sampleInput = document.getElementById('sampleId') as HTMLInputElement;
        if (!sampleInput?.value) {
          alert((window as any).state.lang === 'en' ? 'Please enter a sample ID' : 'يرجى إدخال معرف العينة');
          return;
        }
        
        if (!(window as any).state.hasPrediction) {
          alert((window as any).state.lang === 'en' ? 'Please upload a SNP CSV file or load demo/random data first.' : 'يرجى رفع ملف CSV يحتوي على SNPs أو تحميل بيانات تجريبية/عشوائية أولاً.');
          return;
        }
        (window as any).showLoading();
        setTimeout(() => {
          (window as any).render();
          (window as any).hideLoading();
        }, 800);
      };

      (window as any).generateFace = function() {
        if (!(window as any).state.hasPrediction) {
          alert((window as any).state.lang === 'en' ? 'Please predict phenotypes first' : 'يرجى تنبؤ السمات أولاً');
          return;
        }
        (window as any).showLoading();
        
        const pickMax = (obj: any) => Object.entries(obj).sort((a: any, b: any) => b[1] - a[1])[0];
        const hair = pickMax((window as any).state.probs.hair)[0];
        const eye = pickMax((window as any).state.probs.eye)[0];
        const skin = pickMax((window as any).state.probs.skin)[0];

        const faceImg = document.getElementById('generatedFace') as HTMLImageElement;
        const facePlaceholder = document.getElementById('facePlaceholder');
        const faceSvg = document.getElementById('faceSvg');

        const filePath = `face_images/face_${hair}_${eye}_${skin}.png`;
        
        if (faceImg) {
          faceImg.onload = () => {
            if (faceSvg) faceSvg.classList.add('hidden');
            if (facePlaceholder) facePlaceholder.classList.add('hidden');
            faceImg.classList.remove('hidden');
            (window as any).hideLoading();
          };
          faceImg.onerror = () => {
            (window as any).renderSimpleFace(hair, eye, skin);
            (window as any).hideLoading();
          };
          faceImg.src = filePath;
        }

        (window as any).updateAvatarSummary(hair, eye, skin);
      };

      (window as any).renderSimpleFace = function(hair: string, eye: string, skin: string) {
        const faceImg = document.getElementById('generatedFace');
        const facePlaceholder = document.getElementById('facePlaceholder');
        const faceSvg = document.getElementById('faceSvg');
        
        const hairColorMap: any = {
          brown: '#8b4513',
          blonde: '#d2b48c',
          black: '#2f2f2f'
        };
        const eyeColorMap: any = {
          brown: '#4e3629',
          blue: '#0072b5',
          green: '#2e8b57'
        };
        const skinColorMap: any = {
          light: '#f4d1b6',
          medium: '#d1a679',
          dark: '#8d5524'
        };
        
        const svgHair = document.getElementById('svgHair');
        const svgHead = document.getElementById('svgHead');
        const svgEyeLeft = document.getElementById('svgEyeLeft');
        const svgEyeRight = document.getElementById('svgEyeRight');
        
        if (svgHair) svgHair.setAttribute('fill', hairColorMap[hair]);
        if (svgHead) svgHead.setAttribute('fill', skinColorMap[skin]);
        if (svgEyeLeft) svgEyeLeft.setAttribute('fill', eyeColorMap[eye]);
        if (svgEyeRight) svgEyeRight.setAttribute('fill', eyeColorMap[eye]);
        
        if (faceImg) faceImg.classList.add('hidden');
        if (facePlaceholder) facePlaceholder.classList.add('hidden');
        if (faceSvg) faceSvg.classList.remove('hidden');
      };

      (window as any).updateAvatarSummary = function(hair: string, eye: string, skin: string) {
        const hairLabels: any = {
          'brown': (window as any).state.lang === 'en' ? 'Brown' : 'بني', 
          'blonde': (window as any).state.lang === 'en' ? 'Blonde' : 'أشقر', 
          'black': (window as any).state.lang === 'en' ? 'Black' : 'أسود'
        };
        const eyeLabels: any = {
          'brown': (window as any).state.lang === 'en' ? 'Brown' : 'بني', 
          'blue': (window as any).state.lang === 'en' ? 'Blue' : 'أزرق', 
          'green': (window as any).state.lang === 'en' ? 'Green' : 'أخضر'
        };
        const skinLabels: any = {
          'light': (window as any).state.lang === 'en' ? 'Light' : 'فاتح', 
          'medium': (window as any).state.lang === 'en' ? 'Medium' : 'متوسط', 
          'dark': (window as any).state.lang === 'en' ? 'Dark' : 'غامق'
        };
        
        const summary = (window as any).state.lang === 'en' 
          ? `Hair: ${hairLabels[hair]}, Eyes: ${eyeLabels[eye]}, Skin: ${skinLabels[skin]}`
          : `الشعر: ${hairLabels[hair]}, العينان: ${eyeLabels[eye]}, البشرة: ${skinLabels[skin]}`;
        
        const avatarSummary = document.getElementById('avatarSummary');
        if (avatarSummary) avatarSummary.textContent = summary;
      };

      (window as any).pct = function(x: number) { 
        return Math.round(x * 100); 
      };

      (window as any).render = function() {
        const hairP = Math.max((window as any).state.probs.hair.brown, (window as any).state.probs.hair.blonde, (window as any).state.probs.hair.black);
        const eyeP = Math.max((window as any).state.probs.eye.brown, (window as any).state.probs.eye.blue, (window as any).state.probs.eye.green);
        const skinP = Math.max((window as any).state.probs.skin.light, (window as any).state.probs.skin.medium, (window as any).state.probs.skin.dark);

        const labelHair = (window as any).state.lang === 'en' ? 'Hair' : 'الشعر';
        const labelEye = (window as any).state.lang === 'en' ? 'Eyes' : 'العينان';
        const labelSkin = (window as any).state.lang === 'en' ? 'Skin' : 'البشرة';

        const barH = document.getElementById('barHair');
        const barE = document.getElementById('barEye');
        const barS = document.getElementById('barSkin');
        
        if (barH) {
          barH.style.height = (10 + hairP * 90) + '%';
          barH.setAttribute('data-label', labelHair);
          barH.innerHTML = '<span>' + (window as any).pct(hairP) + '%</span>';
        }
        if (barE) {
          barE.style.height = (10 + eyeP * 90) + '%';
          barE.setAttribute('data-label', labelEye);
          barE.innerHTML = '<span>' + (window as any).pct(eyeP) + '%</span>';
        }
        if (barS) {
          barS.style.height = (10 + skinP * 90) + '%';
          barS.setAttribute('data-label', labelSkin);
          barS.innerHTML = '<span>' + (window as any).pct(skinP) + '%</span>';
        }

        const pickMax = (obj: any) => Object.entries(obj).sort((a: any, b: any) => b[1] - a[1])[0];
        const h = pickMax((window as any).state.probs.hair);
        const e = pickMax((window as any).state.probs.eye);
        const s = pickMax((window as any).state.probs.skin);
        
        const hairLabels: any = {
          'brown': (window as any).state.lang === 'en' ? 'brown' : 'بني', 
          'blonde': (window as any).state.lang === 'en' ? 'blonde' : 'أشقر', 
          'black': (window as any).state.lang === 'en' ? 'black' : 'أسود'
        };
        const eyeLabels: any = {
          'brown': (window as any).state.lang === 'en' ? 'brown' : 'بني', 
          'blue': (window as any).state.lang === 'en' ? 'blue' : 'أزرق', 
          'green': (window as any).state.lang === 'en' ? 'green' : 'أخضر'
        };
        const skinLabels: any = {
          'light': (window as any).state.lang === 'en' ? 'light' : 'فاتح', 
          'medium': (window as any).state.lang === 'en' ? 'medium' : 'متوسط', 
          'dark': (window as any).state.lang === 'en' ? 'dark' : 'غامق'
        };
        
        const hairTxt = document.getElementById('hairTxt');
        const eyeTxt = document.getElementById('eyeTxt');
        const skinTxt = document.getElementById('skinTxt');
        
        if (hairTxt) hairTxt.textContent = ((window as any).state.lang === 'en' ? 'Hair: ' : 'الشعر: ') + hairLabels[h[0]] + ' (' + (window as any).pct(h[1]) + '%)';
        if (eyeTxt) eyeTxt.textContent = ((window as any).state.lang === 'en' ? 'Eyes: ' : 'العينان: ') + eyeLabels[e[0]] + ' (' + (window as any).pct(e[1]) + '%)';
        if (skinTxt) skinTxt.textContent = ((window as any).state.lang === 'en' ? 'Skin: ' : 'البشرة: ') + skinLabels[s[0]] + ' (' + (window as any).pct(s[1]) + '%)';

        (window as any).updateDetails();
        (window as any).tSync();
      };

      (window as any).updateDetails = function() {
        const hairDetails = document.getElementById('hairDetails');
        const eyeDetails = document.getElementById('eyeDetails');
        const skinDetails = document.getElementById('skinDetails');
        
        if (hairDetails) hairDetails.innerHTML = (window as any).generateDetailHTML((window as any).state.probs.hair, (window as any).state.lang, 'hair');
        if (eyeDetails) eyeDetails.innerHTML = (window as any).generateDetailHTML((window as any).state.probs.eye, (window as any).state.lang, 'eye');
        if (skinDetails) skinDetails.innerHTML = (window as any).generateDetailHTML((window as any).state.probs.skin, (window as any).state.lang, 'skin');
      };

      (window as any).generateDetailHTML = function(probs: any, lang: string, type: string) {
        const labels: any = {
          hair: {
            brown: lang === 'en' ? 'Brown' : 'بني',
            blonde: lang === 'en' ? 'Blonde' : 'أشقر', 
            black: lang === 'en' ? 'Black' : 'أسود'
          },
          eye: {
            brown: lang === 'en' ? 'Brown' : 'بني',
            blue: lang === 'en' ? 'Blue' : 'أزرق', 
            green: lang === 'en' ? 'Green' : 'أخضر'
          },
          skin: {
            light: lang === 'en' ? 'Light' : 'فاتح',
            medium: lang === 'en' ? 'Medium' : 'متوسط', 
            dark: lang === 'en' ? 'Dark' : 'غامق'
          }
        };
        
        let html = '';
        for (const [key, value] of Object.entries(probs)) {
          const width = (value as number) * 100;
          html += `
            <div class="probability-bar">
              <div class="label">
                <span>${labels[type][key]}</span>
                <span>${(window as any).pct(value as number)}%</span>
              </div>
              <div class="bar-container">
                <div class="bar-fill" style="width: ${width}%"></div>
              </div>
            </div>
          `;
        }
        return html;
      };

      (window as any).updateDynamicLabels = function() {
        if ((window as any).state.hasPrediction) {
          const pickMax = (obj: any) => Object.entries(obj).sort((a: any, b: any) => b[1] - a[1])[0];
          const hair = pickMax((window as any).state.probs.hair)[0];
          const eye = pickMax((window as any).state.probs.eye)[0];
          const skin = pickMax((window as any).state.probs.skin)[0];
          
          (window as any).updateAvatarSummary(hair, eye, skin);
        }
      };

      (window as any).resetApp = function() {
        const sampleInput = document.getElementById('sampleId') as HTMLInputElement;
        const vcfFile = document.getElementById('vcfFile') as HTMLInputElement;
        const vcfFileInfo = document.getElementById('vcfFileInfo');
        const generatedFace = document.getElementById('generatedFace');
        const facePlaceholder = document.getElementById('facePlaceholder');
        const generateBtn = document.getElementById('generateFaceBtn') as HTMLButtonElement;
        
        if (sampleInput) sampleInput.value = '';
        if (vcfFile) vcfFile.value = '';
        if (vcfFileInfo) vcfFileInfo.textContent = '';
        if (generatedFace) generatedFace.classList.add('hidden');
        if (facePlaceholder) facePlaceholder.classList.remove('hidden');
        if (generateBtn) generateBtn.disabled = true;
        
        (window as any).state.probs = {
          hair: {brown: 0.4, blonde: 0.3, black: 0.3},
          eye: {brown: 0.5, blue: 0.3, green: 0.2},
          skin: {light: 0.4, medium: 0.4, dark: 0.2}
        };
        (window as any).state.hasPrediction = false;
        
        const hairTxt = document.getElementById('hairTxt');
        const eyeTxt = document.getElementById('eyeTxt');
        const skinTxt = document.getElementById('skinTxt');
        const avatarSummary = document.getElementById('avatarSummary');
        
        if (hairTxt) hairTxt.textContent = (window as any).state.lang === 'en' ? 'Hair: —' : 'الشعر: —';
        if (eyeTxt) eyeTxt.textContent = (window as any).state.lang === 'en' ? 'Eyes: —' : 'العينان: —';
        if (skinTxt) skinTxt.textContent = (window as any).state.lang === 'en' ? 'Skin: —' : 'البشرة: —';
        if (avatarSummary) avatarSummary.textContent = (window as any).state.lang === 'en' ? 'No predictions yet' : 'لا توجد تنبؤات بعد';
        
        const barHair = document.getElementById('barHair');
        const barEye = document.getElementById('barEye');
        const barSkin = document.getElementById('barSkin');
        
        if (barHair) {
          barHair.style.height = '30%';
          barHair.innerHTML = '';
        }
        if (barEye) {
          barEye.style.height = '30%';
          barEye.innerHTML = '';
        }
        if (barSkin) {
          barSkin.style.height = '30%';
          barSkin.innerHTML = '';
        }
        
        const hairDetails = document.getElementById('hairDetails');
        const eyeDetails = document.getElementById('eyeDetails');
        const skinDetails = document.getElementById('skinDetails');
        
        if (hairDetails) hairDetails.innerHTML = '';
        if (eyeDetails) eyeDetails.innerHTML = '';
        if (skinDetails) skinDetails.innerHTML = '';
      };

      (window as any).initApp = function() {
        (window as any).render();
        (window as any).tSync();
        
        setTimeout(() => {
          document.querySelectorAll('.card').forEach((card: any, index: number) => {
            card.style.animation = `slideIn 0.5s ease ${index * 0.1}s forwards`;
            card.style.opacity = '0';
          });
        }, 100);
      };

      // Add event listeners
      const toggleLangBtn = document.getElementById('toggleLangBtn');
      const loadDemoBtn = document.getElementById('loadDemoBtn');
      const predictBtn = document.getElementById('predictBtn');
      const generateFaceBtn = document.getElementById('generateFaceBtn');
      const resetBtn = document.getElementById('resetBtn');
      const vcfFile = document.getElementById('vcfFile');

      if (toggleLangBtn) toggleLangBtn.addEventListener('click', (window as any).toggleLang);
      if (loadDemoBtn) loadDemoBtn.addEventListener('click', (window as any).loadDemo);
      if (predictBtn) predictBtn.addEventListener('click', (window as any).predict);
      if (generateFaceBtn) generateFaceBtn.addEventListener('click', (window as any).generateFace);
      if (resetBtn) resetBtn.addEventListener('click', (window as any).resetApp);
      if (vcfFile) vcfFile.addEventListener('change', (window as any).handleFileSelect);

      (window as any).initApp();
    };

    initScript();

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="upload-standalone">
      <div className="wrap">
        <div className="topbar">
          <div className="logo">
            <div className="logo-text">GenoScene</div>
            <div className="badge">AI-Powered Forensic Phenotype Prediction</div>
          </div>
          <div className="lang">
            <span className="badge" id="langLabel">EN</span>
            <button className="btn muted" id="toggleLangBtn">عربي / English</button>
          </div>
        </div>

        <div className="card info-card">
          <div className="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span data-en="About GenoScene" data-ar="حول GenoScene">About GenoScene</span>
          </div>
          <div className="info-content">
            <p data-en="GenoScene is an advanced AI-powered forensic phenotype prediction system that analyzes DNA data to predict physical characteristics including hair color, eye color, and skin tone. This system is designed for forensic applications and research purposes." 
               data-ar="GenoScene هو نظام متقدم للتنبؤ بالسمات الوراثية المدعوم بالذكاء الاصطناعي يحلل بيانات الحمض النووي للتنبؤ بالخصائص الجسدية بما في ذلك لون الشعر ولون العينين ولون البشرة. تم تصميم هذا النظام للتطبيقات الجنائية وأغراض البحث.">
              GenoScene is an advanced AI-powered forensic phenotype prediction system that analyzes DNA data to predict physical characteristics including hair color, eye color, and skin tone. This system is designed for forensic applications and research purposes.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>
                <span data-en="High Accuracy Predictions" data-ar="تنبؤات عالية الدقة">High Accuracy Predictions</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                </svg>
                <span data-en="Secure Data Processing" data-ar="معالجة آمنة للبيانات">Secure Data Processing</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
                <span data-en="Research Grade Analysis" data-ar="تحليل على مستوى البحث">Research Grade Analysis</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <div className="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span data-en="Input Data" data-ar="بيانات الإدخال">Input Data</span>
            </div>
            
            <div className="row">
              <input id="sampleId" type="text" placeholder="Sample ID / معرف العينة" />
            </div>
            
            <div className="row">
              <div className="file-upload">
                <button className="btn muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '6px'}}>
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                  </svg>
                  <span data-en="Upload SNP CSV File" data-ar="رفع ملف SNP CSV">Upload SNP CSV File</span>
                </button>
                <input type="file" id="vcfFile" accept=".csv" />
              </div>
              <div className="file-info" id="vcfFileInfo"></div>
            </div>
            
            <div className="row" style={{marginTop: '20px'}}>
              <button className="btn accent" id="predictBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '6px'}}>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                </svg>
                <span data-en="Predict Phenotypes" data-ar="تنبؤ بالسمات">Predict Phenotypes</span>
              </button>
              
              <button className="btn" id="generateFaceBtn" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '6px'}}>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm-4.5-5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-1zm5 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-1zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-1zm5 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-1z"/>
                </svg>
                <span data-en="Generate Face" data-ar="توليد الوجه">Generate Face</span>
              </button>
            </div>
            
            <div className="row">
              <button className="btn muted" id="loadDemoBtn">
                <span data-en="Load Demo Data" data-ar="تحميل بيانات تجريبية">Load Demo Data</span>
              </button>
              
              <button className="btn muted" id="resetBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '6px'}}>
                  <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
                <span data-en="Reset" data-ar="إعادة تعيين">Reset</span>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span data-en="Generated Face" data-ar="الوجه المُولد">Generated Face</span>
            </div>
            
            <div className="avatar-container">
              <div className="face-placeholder" id="facePlaceholder">
                <span data-en="Upload data and click 'Predict Phenotypes' to generate a face" 
                      data-ar="قم برفع البيانات ثم انقر على 'تنبؤ بالسمات' لتوليد الوجه">
                  Upload data and click 'Predict Phenotypes' to generate a face
                </span>
              </div>
              <img className="generated-face hidden" id="generatedFace" alt="Generated face based on DNA analysis" />
              <svg id="faceSvg" className="hidden" width="200" height="200" viewBox="0 0 200 200" aria-label="Generated face illustration">
                <circle id="svgHead" cx="100" cy="110" r="70" fill="#f4d1b6" />
                <rect id="svgHair" x="20" y="20" width="160" height="80" rx="40" ry="40" fill="#8b4513" />
                <circle id="svgEyeLeft" cx="65" cy="100" r="10" fill="#000000" />
                <circle id="svgEyeRight" cx="135" cy="100" r="10" fill="#000000" />
              </svg>
            </div>
            
            <div className="row" style={{justifyContent: 'center', marginTop: '16px'}}>
              <div className="badge" id="avatarSummary" data-en="No predictions yet" data-ar="لا توجد تنبؤات بعد">No predictions yet</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span data-en="Predicted Probabilities" data-ar="احتمالات السمات المتوقعة">Predicted Probabilities</span>
          </div>
          
          <div className="chart">
            <div id="barHair" className="bar" style={{height:'30%'}} data-label="Hair"></div>
            <div id="barEye" className="bar" style={{height:'30%'}} data-label="Eyes"></div>
            <div id="barSkin" className="bar" style={{height:'30%'}} data-label="Skin"></div>
          </div>
          
          <div className="traits-list">
            <div className="trait-pill" id="hairTxt">Hair: —</div>
            <div className="trait-pill" id="eyeTxt">Eyes: —</div>
            <div className="trait-pill" id="skinTxt">Skin: —</div>
          </div>
        </div>

        <div className="card">
          <div className="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span data-en="Detailed Probabilities" data-ar="الاحتمالات التفصيلية">Detailed Probabilities</span>
          </div>
          
          <div className="trait-details">
            <div className="trait-category">
              <h4 data-en="Hair Color" data-ar="لون الشعر">Hair Color</h4>
              <div id="hairDetails"></div>
            </div>
            <div className="trait-category">
              <h4 data-en="Eye Color" data-ar="لون العينين">Eye Color</h4>
              <div id="eyeDetails"></div>
            </div>
            <div className="trait-category">
              <h4 data-en="Skin Tone" data-ar="لون البشرة">Skin Tone</h4>
              <div id="skinDetails"></div>
            </div>
          </div>
        </div>

        <footer>
          <div data-en="GenoScene - AI-Powered Forensic Phenotype Prediction System | This is a demonstration prototype"
               data-ar="GenoScene - نظام التنبؤ بالسمات الوراثية المدعوم بالذكاء الاصطناعي | هذا نموذج تجريبي">
            GenoScene - AI-Powered Forensic Phenotype Prediction System | This is a demonstration prototype
          </div>
          <div style={{marginTop: '8px'}}>
            <span data-en="Version: 2.1.0" data-ar="الإصدار: 2.1.0">Version: 2.1.0</span> | 
            <span data-en="Updated: 2025-09-01" data-ar="آخر تحديث: 2025-09-01">Updated: 2025-09-01</span>
          </div>
        </footer>
      </div>

      <div className="processing-overlay hidden" id="processingOverlay">
        <div className="processing-spinner"></div>
        <div className="processing-text" data-en="Processing DNA data..." data-ar="جاري معالجة بيانات DNA...">Processing DNA data...</div>
      </div>
    </div>
  );
};

export default UploadStandalone;
