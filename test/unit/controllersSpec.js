'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
          ctrl = $controller('PhoneListCtrl', {$scope:scope});

        // 故意製造測試錯誤
      expect(scope.phones.length).toBe(2);
        // 正確結果
        // expect(scope.phones.length).toBe(3);
    }));

  });
});
