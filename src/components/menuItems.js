export const menuItems = [
    {
      title: 'Kullanıcı Yönetimi',
      route: 'UserManagement',
      subMenu: [
        { title: 'Kullanıcı Listeleme', route: 'UserList' },
        { title: 'Kullanıcı Ekleme/Düzenleme', route: 'AddEditUser' },
        { title: 'Hesap Engelleme/Onaylama', route: 'BlockUnblockUser' },
        { title: 'Rol ve İzin Yönetimi', route: 'RolePermissions' },
      ],
    },
    {
      title: 'İçerik Yönetimi',
      route: 'ContentManagement',
      subMenu: [
        { title: 'Paylaşımlar Listeleme', route: 'PostList' },
        { title: 'İçerik Moderasyonu', route: 'ContentModeration' },
        { title: 'İçerik Silme', route: 'DeletePost' },
        { title: 'Kategorilere Göre İçerik Yönetimi', route: 'CategoryContent' },
      ],
    },
    {
      title: 'Bildirimler ve Uyarılar',
      route: 'Notifications',
      subMenu: [
        { title: 'Kullanıcı Bildirimleri', route: 'UserNotifications' },
        { title: 'Sistem Bildirimleri', route: 'SystemNotifications' },
        { title: 'Özel Mesajlar', route: 'DirectMessages' },
        { title: 'Aktivite Raporları', route: 'ActivityReports' },
        { title: 'E-posta Bildirim Ayarları', route: 'EmailNotificationSettings' },
        { title: 'Push Bildirim Ayarları', route: 'PushNotificationSettings' },
        { title: 'Anket ve Geri Bildirim Bildirimleri', route: 'SurveyNotifications' },
      ],
    },
    {
      title: 'İstatistikler ve Raporlar',
      route: 'Reports',
      subMenu: [
        { title: 'Kullanıcı İstatistikleri', route: 'UserStatistics' },
        { title: 'İçerik İstatistikleri', route: 'ContentStatistics' },
        { title: 'Sistem Performans Raporları', route: 'SystemPerformanceReports' },
        { title: 'Kullanıcı Aktivite Raporları', route: 'UserActivityReports' },
      ],
    },
    {
      title: 'Ayarlar',
      route: 'Settings',
      subMenu: [
        { title: 'Genel Ayarlar', route: 'GeneralSettings' },
        { title: 'Güvenlik Ayarları', route: 'SecuritySettings' },
        { title: 'Dil ve Bölge Ayarları', route: 'LanguageRegionSettings' },
        { title: 'Ödeme ve Faturalama', route: 'PaymentBillingSettings' },
        { title: 'API ve Entegrasyon Ayarları', route: 'APIIntegrations' },
      ],
    },
    {
      title: 'Yedekleme ve Sistem Bakımı',
      route: 'BackupAndMaintenance',
      subMenu: [
        { title: 'Yedekleme Yönetimi', route: 'BackupManagement' },
        { title: 'Sistem Bakım Durumu', route: 'SystemMaintenanceStatus' },
        { title: 'Veritabanı Yönetimi', route: 'DatabaseManagement' },
      ],
    },
    {
      title: 'Platform Moderasyonu',
      route: 'Moderation',
      subMenu: [
        { title: 'İçerik Moderasyonu', route: 'ContentModeration' },
        { title: 'Kullanıcı Şikayetleri', route: 'UserComplaints' },
        { title: 'Raporlama ve İnceleme', route: 'ReportAndReview' },
      ],
    },
    {
      title: 'Geri Bildirim ve Anketler',
      route: 'FeedbackAndSurveys',
      subMenu: [
        { title: 'Kullanıcı Geri Bildirimleri', route: 'UserFeedback' },
        { title: 'Anket Yönetimi', route: 'SurveyManagement' },
      ],
    },
    {
      title: 'Geliştirici Araçları',
      route: 'DeveloperTools',
      subMenu: [
        { title: 'API Yönetimi', route: 'APIManagement' },
        { title: 'Log Yönetimi', route: 'LogManagement' },
        { title: 'Performans İzleme', route: 'PerformanceMonitoring' },
      ],
    },
    {
      title: 'Yönetim Paneli',
      route: 'AdminDashboard',
      subMenu: [
        { title: 'Genel Durum', route: 'GeneralStatus' },
        { title: 'Sistem Durumu', route: 'SystemStatus' },
        { title: 'Sosyal Medya Bağlantıları', route: 'SocialMediaConnections' },
      ],
    },
  ];
  