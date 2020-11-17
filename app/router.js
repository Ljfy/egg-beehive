'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, config } = app;
  // let authHandler = {};
  // if (config.verification_mode === 'jwt') {
  //   authHandler = app.jwt;
  // } else {
  //   authHandler = app.middleware.sessionHandler({}, app);
  // }
  /**
   * 用户
   */
  router.post('/api/v1/users', controller.v1.users.create);
  router.put('/api/v1/users', controller.v1.users.update);
  router.get('/api/v1/users/list', controller.v1.users.findAll);
  router.get('/api/v1/users', controller.v1.users.findOne);
  router.delete('/api/v1/users', controller.v1.users.destroy);
  router.post('/api/v1/users/login', controller.v1.users.login);
  router.post('/api/v1/users/logout', controller.v1.users.logout);
  router.get('/api/v1/users/user_info', controller.v1.users.userInfo);
  router.get('/api/v1/users/exists_user_unique_fields', controller.v1.users.existsUserUniqueFields);
  router.put('/api/v1/users/password', controller.v1.users.updateUserPassword);
  router.put('/api/v1/users/department', controller.v1.users.updateUserDepartment);

  /**
   * 角色
   */
  router.post('/api/v1/roles', controller.v1.roles.create);
  router.put('/api/v1/roles', controller.v1.roles.update);
  router.get('/api/v1/roles/list', controller.v1.roles.index);
  router.get('/api/v1/roles', controller.v1.roles.show);
  router.delete('/api/v1/roles', controller.v1.roles.destroy);
  router.put('/api/v1/roles/is_default', controller.v1.roles.updateIsDefault);

  /**
   * 用户角色关系表
   */
  router.post('/api/v1/user_roles', controller.v1.userRoles.create); // 废弃
  router.put('/api/v1/user_roles', controller.v1.userRoles.update); // 废弃
  router.get('/api/v1/user_roles/list', controller.v1.userRoles.findAll);
  router.get('/api/v1/user_roles', controller.v1.userRoles.findOne); // 废弃
  router.delete('/api/v1/user_roles', controller.v1.userRoles.destroy);
  router.post('/api/v1/user_roles/bulk_role', controller.v1.userRoles.bulkCreateRole);

  /**
   * 资源
   */
  router.post('/api/v1/permissions', controller.v1.permissions.create);
  router.put('/api/v1/permissions', controller.v1.permissions.update);
  router.get('/api/v1/permissions/list', controller.v1.permissions.findAll);
  router.get('/api/v1/permissions', controller.v1.permissions.findOne);
  router.delete('/api/v1/permissions', controller.v1.permissions.destroy);

  /**
   * 角色-资源关系表
   */
  router.post('/api/v1/role_permissions', controller.v1.rolePermissions.create);
  router.put('/api/v1/role_permissions', controller.v1.rolePermissions.update);
  router.get('/api/v1/role_permissions/list', controller.v1.rolePermissions.findAll);
  router.get('/api/v1/role_permissions', controller.v1.rolePermissions.findOne);
  router.delete('/api/v1/role_permissions', controller.v1.rolePermissions.destroy);
  router.post('/api/v1/role_permissions/bulk_permission', controller.v1.rolePermissions.bulkCreatePremission);

  /**
   * 角色-菜单关系表
   */
  router.post('/api/v1/role_menus', controller.v1.roleMenus.create);
  router.put('/api/v1/role_menus', controller.v1.roleMenus.update);
  router.get('/api/v1/role_menus/list', controller.v1.roleMenus.findAll);
  router.get('/api/v1/role_menus', controller.v1.roleMenus.findOne);
  router.delete('/api/v1/role_menus', controller.v1.roleMenus.destroy);
  router.post('/api/v1/role_menus/bulk_menu', controller.v1.roleMenus.bulkCreateMenu);

  /**
   * 菜单
   */
  router.post('/api/v1/menus', controller.v1.menus.create);
  router.put('/api/v1/menus', controller.v1.menus.update);
  router.get('/api/v1/menus/list', controller.v1.menus.findAll);
  router.get('/api/v1/menus', controller.v1.menus.findOne);
  router.delete('/api/v1/menus', controller.v1.menus.destroy);
  router.get('/api/v1/menus/user_menus', controller.v1.menus.userMenus);

  /**
   * 验证码
   */
  router.post('/api/v1/verification_codes', controller.v1.verificationCodes.create);
  router.put('/api/v1/verification_codes', controller.v1.verificationCodes.update);
  router.get('/api/v1/verification_codes/list', controller.v1.verificationCodes.findAll);
  router.get('/api/v1/verification_codes', controller.v1.verificationCodes.findOne);
  router.delete('/api/v1/verification_codes', controller.v1.verificationCodes.destroy);
  router.get('/api/v1/verification_codes/verification', controller.v1.verificationCodes.verification);

  /**
   * 资源上传
   */
  router.post('/api/v1/uploads', controller.v1.uploads.create);

  /**
   * 配置
   */
  router.put('/api/v1/configurations', controller.v1.configurations.update);
  router.get('/api/v1/configurations/public_key', controller.v1.configurations.findRsaPublicKey);

  /**
   * 部门
   */
  router.post('/api/v1/departments', controller.v1.departments.create);
  router.put('/api/v1/departments', controller.v1.departments.update);
  router.get('/api/v1/departments/list', controller.v1.departments.findAll);
  router.get('/api/v1/departments', controller.v1.departments.findOne);
  router.delete('/api/v1/departments', controller.v1.departments.destroy);
};
