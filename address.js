$(document).ready(function() {

    var cities = [
        ['台北市', '中山區', '松山區', '士林區', '內湖區'],
        ['新北市', '板橋區', '中和區', '永和區', '蘆洲區'],
        ['桃園市', '中壢區', '平鎮區', '龍潭區', '大溪區'],
        ['台中市', '西屯區', '北屯區', '南屯區', '霧峰區'],
        ['台南市', '永康區', '新化區', '安南區', '關廟區'],
        ['高雄市', '左營區', '楠梓區', '三民區', '苓雅區']
    ];

    $(document).on('change', '#city', function() {
        var city = $(this).val();
        var districts = [];
        var $district = $('select#district');

        for (var i = 0; i < cities.length; i++) {
            if (cities[i][0] == city) {
                districts = cities[i];
                break;
            }
        }

        $district.children().remove();
        $district.append('<option value="">--------</option>');

        if (!districts) {
            return;
        }

        for (var i = 1; i < districts.length; i++) {
            var element = '<option value=""+districts[i]+"">' + districts[i] + '</option>';
            $district.append(element);
        }
    });

});