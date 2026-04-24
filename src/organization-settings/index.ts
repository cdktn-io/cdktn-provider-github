/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OrganizationSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  *  Whether or not advanced security is enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}
  */
  readonly advancedSecurityEnabledForNewRepositories?: boolean | cdktn.IResolvable;
  /**
  * The billing email address for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#billing_email OrganizationSettings#billing_email}
  */
  readonly billingEmail: string;
  /**
  * The blog URL for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#blog OrganizationSettings#blog}
  */
  readonly blog?: string;
  /**
  * The company name for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#company OrganizationSettings#company}
  */
  readonly company?: string;
  /**
  * The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}
  */
  readonly defaultRepositoryPermission?: string;
  /**
  * Whether or not dependabot alerts are enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}
  */
  readonly dependabotAlertsEnabledForNewRepositories?: boolean | cdktn.IResolvable;
  /**
  *  Whether or not dependabot security updates are enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}
  */
  readonly dependabotSecurityUpdatesEnabledForNewRepositories?: boolean | cdktn.IResolvable;
  /**
  * Whether or not dependency graph is enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}
  */
  readonly dependencyGraphEnabledForNewRepositories?: boolean | cdktn.IResolvable;
  /**
  * The description for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#description OrganizationSettings#description}
  */
  readonly description?: string;
  /**
  * The email address for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#email OrganizationSettings#email}
  */
  readonly email?: string;
  /**
  * Whether or not organization projects are enabled for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}
  */
  readonly hasOrganizationProjects?: boolean | cdktn.IResolvable;
  /**
  * Whether or not repository projects are enabled for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}
  */
  readonly hasRepositoryProjects?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#id OrganizationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#location OrganizationSettings#location}
  */
  readonly location?: string;
  /**
  * Whether or not organization members can create new internal repositories. For Enterprise Organizations only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}
  */
  readonly membersCanCreateInternalRepositories?: boolean | cdktn.IResolvable;
  /**
  * Whether or not organization members can create new pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}
  */
  readonly membersCanCreatePages?: boolean | cdktn.IResolvable;
  /**
  * Whether or not organization members can create new private pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}
  */
  readonly membersCanCreatePrivatePages?: boolean | cdktn.IResolvable;
  /**
  * Whether or not organization members can create new private repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}
  */
  readonly membersCanCreatePrivateRepositories?: boolean | cdktn.IResolvable;
  /**
  * Whether or not organization members can create new public pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}
  */
  readonly membersCanCreatePublicPages?: boolean | cdktn.IResolvable;
  /**
  * Whether or not organization members can create new public repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}
  */
  readonly membersCanCreatePublicRepositories?: boolean | cdktn.IResolvable;
  /**
  * Whether or not organization members can create new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}
  */
  readonly membersCanCreateRepositories?: boolean | cdktn.IResolvable;
  /**
  * Whether or not organization members can fork private repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}
  */
  readonly membersCanForkPrivateRepositories?: boolean | cdktn.IResolvable;
  /**
  * The name for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#name OrganizationSettings#name}
  */
  readonly name?: string;
  /**
  * Whether or not secret scanning is enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}
  */
  readonly secretScanningEnabledForNewRepositories?: boolean | cdktn.IResolvable;
  /**
  * Whether or not secret scanning push protection is enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}
  */
  readonly secretScanningPushProtectionEnabledForNewRepositories?: boolean | cdktn.IResolvable;
  /**
  * The Twitter username for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#twitter_username OrganizationSettings#twitter_username}
  */
  readonly twitterUsername?: string;
  /**
  * Whether or not commit signatures are required for commits to the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}
  */
  readonly webCommitSignoffRequired?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings github_organization_settings}
*/
export class OrganizationSettings extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OrganizationSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationSettings to import
  * @param importFromId The id of the existing OrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings github_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization_settings',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.12.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedSecurityEnabledForNewRepositories = config.advancedSecurityEnabledForNewRepositories;
    this._billingEmail = config.billingEmail;
    this._blog = config.blog;
    this._company = config.company;
    this._defaultRepositoryPermission = config.defaultRepositoryPermission;
    this._dependabotAlertsEnabledForNewRepositories = config.dependabotAlertsEnabledForNewRepositories;
    this._dependabotSecurityUpdatesEnabledForNewRepositories = config.dependabotSecurityUpdatesEnabledForNewRepositories;
    this._dependencyGraphEnabledForNewRepositories = config.dependencyGraphEnabledForNewRepositories;
    this._description = config.description;
    this._email = config.email;
    this._hasOrganizationProjects = config.hasOrganizationProjects;
    this._hasRepositoryProjects = config.hasRepositoryProjects;
    this._id = config.id;
    this._location = config.location;
    this._membersCanCreateInternalRepositories = config.membersCanCreateInternalRepositories;
    this._membersCanCreatePages = config.membersCanCreatePages;
    this._membersCanCreatePrivatePages = config.membersCanCreatePrivatePages;
    this._membersCanCreatePrivateRepositories = config.membersCanCreatePrivateRepositories;
    this._membersCanCreatePublicPages = config.membersCanCreatePublicPages;
    this._membersCanCreatePublicRepositories = config.membersCanCreatePublicRepositories;
    this._membersCanCreateRepositories = config.membersCanCreateRepositories;
    this._membersCanForkPrivateRepositories = config.membersCanForkPrivateRepositories;
    this._name = config.name;
    this._secretScanningEnabledForNewRepositories = config.secretScanningEnabledForNewRepositories;
    this._secretScanningPushProtectionEnabledForNewRepositories = config.secretScanningPushProtectionEnabledForNewRepositories;
    this._twitterUsername = config.twitterUsername;
    this._webCommitSignoffRequired = config.webCommitSignoffRequired;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_security_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _advancedSecurityEnabledForNewRepositories?: boolean | cdktn.IResolvable; 
  public get advancedSecurityEnabledForNewRepositories() {
    return this.getBooleanAttribute('advanced_security_enabled_for_new_repositories');
  }
  public set advancedSecurityEnabledForNewRepositories(value: boolean | cdktn.IResolvable) {
    this._advancedSecurityEnabledForNewRepositories = value;
  }
  public resetAdvancedSecurityEnabledForNewRepositories() {
    this._advancedSecurityEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityEnabledForNewRepositoriesInput() {
    return this._advancedSecurityEnabledForNewRepositories;
  }

  // billing_email - computed: false, optional: false, required: true
  private _billingEmail?: string; 
  public get billingEmail() {
    return this.getStringAttribute('billing_email');
  }
  public set billingEmail(value: string) {
    this._billingEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingEmailInput() {
    return this._billingEmail;
  }

  // blog - computed: false, optional: true, required: false
  private _blog?: string; 
  public get blog() {
    return this.getStringAttribute('blog');
  }
  public set blog(value: string) {
    this._blog = value;
  }
  public resetBlog() {
    this._blog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blogInput() {
    return this._blog;
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // default_repository_permission - computed: false, optional: true, required: false
  private _defaultRepositoryPermission?: string; 
  public get defaultRepositoryPermission() {
    return this.getStringAttribute('default_repository_permission');
  }
  public set defaultRepositoryPermission(value: string) {
    this._defaultRepositoryPermission = value;
  }
  public resetDefaultRepositoryPermission() {
    this._defaultRepositoryPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRepositoryPermissionInput() {
    return this._defaultRepositoryPermission;
  }

  // dependabot_alerts_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _dependabotAlertsEnabledForNewRepositories?: boolean | cdktn.IResolvable; 
  public get dependabotAlertsEnabledForNewRepositories() {
    return this.getBooleanAttribute('dependabot_alerts_enabled_for_new_repositories');
  }
  public set dependabotAlertsEnabledForNewRepositories(value: boolean | cdktn.IResolvable) {
    this._dependabotAlertsEnabledForNewRepositories = value;
  }
  public resetDependabotAlertsEnabledForNewRepositories() {
    this._dependabotAlertsEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependabotAlertsEnabledForNewRepositoriesInput() {
    return this._dependabotAlertsEnabledForNewRepositories;
  }

  // dependabot_security_updates_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _dependabotSecurityUpdatesEnabledForNewRepositories?: boolean | cdktn.IResolvable; 
  public get dependabotSecurityUpdatesEnabledForNewRepositories() {
    return this.getBooleanAttribute('dependabot_security_updates_enabled_for_new_repositories');
  }
  public set dependabotSecurityUpdatesEnabledForNewRepositories(value: boolean | cdktn.IResolvable) {
    this._dependabotSecurityUpdatesEnabledForNewRepositories = value;
  }
  public resetDependabotSecurityUpdatesEnabledForNewRepositories() {
    this._dependabotSecurityUpdatesEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependabotSecurityUpdatesEnabledForNewRepositoriesInput() {
    return this._dependabotSecurityUpdatesEnabledForNewRepositories;
  }

  // dependency_graph_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _dependencyGraphEnabledForNewRepositories?: boolean | cdktn.IResolvable; 
  public get dependencyGraphEnabledForNewRepositories() {
    return this.getBooleanAttribute('dependency_graph_enabled_for_new_repositories');
  }
  public set dependencyGraphEnabledForNewRepositories(value: boolean | cdktn.IResolvable) {
    this._dependencyGraphEnabledForNewRepositories = value;
  }
  public resetDependencyGraphEnabledForNewRepositories() {
    this._dependencyGraphEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyGraphEnabledForNewRepositoriesInput() {
    return this._dependencyGraphEnabledForNewRepositories;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // has_organization_projects - computed: false, optional: true, required: false
  private _hasOrganizationProjects?: boolean | cdktn.IResolvable; 
  public get hasOrganizationProjects() {
    return this.getBooleanAttribute('has_organization_projects');
  }
  public set hasOrganizationProjects(value: boolean | cdktn.IResolvable) {
    this._hasOrganizationProjects = value;
  }
  public resetHasOrganizationProjects() {
    this._hasOrganizationProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasOrganizationProjectsInput() {
    return this._hasOrganizationProjects;
  }

  // has_repository_projects - computed: false, optional: true, required: false
  private _hasRepositoryProjects?: boolean | cdktn.IResolvable; 
  public get hasRepositoryProjects() {
    return this.getBooleanAttribute('has_repository_projects');
  }
  public set hasRepositoryProjects(value: boolean | cdktn.IResolvable) {
    this._hasRepositoryProjects = value;
  }
  public resetHasRepositoryProjects() {
    this._hasRepositoryProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasRepositoryProjectsInput() {
    return this._hasRepositoryProjects;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // members_can_create_internal_repositories - computed: false, optional: true, required: false
  private _membersCanCreateInternalRepositories?: boolean | cdktn.IResolvable; 
  public get membersCanCreateInternalRepositories() {
    return this.getBooleanAttribute('members_can_create_internal_repositories');
  }
  public set membersCanCreateInternalRepositories(value: boolean | cdktn.IResolvable) {
    this._membersCanCreateInternalRepositories = value;
  }
  public resetMembersCanCreateInternalRepositories() {
    this._membersCanCreateInternalRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanCreateInternalRepositoriesInput() {
    return this._membersCanCreateInternalRepositories;
  }

  // members_can_create_pages - computed: false, optional: true, required: false
  private _membersCanCreatePages?: boolean | cdktn.IResolvable; 
  public get membersCanCreatePages() {
    return this.getBooleanAttribute('members_can_create_pages');
  }
  public set membersCanCreatePages(value: boolean | cdktn.IResolvable) {
    this._membersCanCreatePages = value;
  }
  public resetMembersCanCreatePages() {
    this._membersCanCreatePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanCreatePagesInput() {
    return this._membersCanCreatePages;
  }

  // members_can_create_private_pages - computed: false, optional: true, required: false
  private _membersCanCreatePrivatePages?: boolean | cdktn.IResolvable; 
  public get membersCanCreatePrivatePages() {
    return this.getBooleanAttribute('members_can_create_private_pages');
  }
  public set membersCanCreatePrivatePages(value: boolean | cdktn.IResolvable) {
    this._membersCanCreatePrivatePages = value;
  }
  public resetMembersCanCreatePrivatePages() {
    this._membersCanCreatePrivatePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanCreatePrivatePagesInput() {
    return this._membersCanCreatePrivatePages;
  }

  // members_can_create_private_repositories - computed: false, optional: true, required: false
  private _membersCanCreatePrivateRepositories?: boolean | cdktn.IResolvable; 
  public get membersCanCreatePrivateRepositories() {
    return this.getBooleanAttribute('members_can_create_private_repositories');
  }
  public set membersCanCreatePrivateRepositories(value: boolean | cdktn.IResolvable) {
    this._membersCanCreatePrivateRepositories = value;
  }
  public resetMembersCanCreatePrivateRepositories() {
    this._membersCanCreatePrivateRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanCreatePrivateRepositoriesInput() {
    return this._membersCanCreatePrivateRepositories;
  }

  // members_can_create_public_pages - computed: false, optional: true, required: false
  private _membersCanCreatePublicPages?: boolean | cdktn.IResolvable; 
  public get membersCanCreatePublicPages() {
    return this.getBooleanAttribute('members_can_create_public_pages');
  }
  public set membersCanCreatePublicPages(value: boolean | cdktn.IResolvable) {
    this._membersCanCreatePublicPages = value;
  }
  public resetMembersCanCreatePublicPages() {
    this._membersCanCreatePublicPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanCreatePublicPagesInput() {
    return this._membersCanCreatePublicPages;
  }

  // members_can_create_public_repositories - computed: false, optional: true, required: false
  private _membersCanCreatePublicRepositories?: boolean | cdktn.IResolvable; 
  public get membersCanCreatePublicRepositories() {
    return this.getBooleanAttribute('members_can_create_public_repositories');
  }
  public set membersCanCreatePublicRepositories(value: boolean | cdktn.IResolvable) {
    this._membersCanCreatePublicRepositories = value;
  }
  public resetMembersCanCreatePublicRepositories() {
    this._membersCanCreatePublicRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanCreatePublicRepositoriesInput() {
    return this._membersCanCreatePublicRepositories;
  }

  // members_can_create_repositories - computed: false, optional: true, required: false
  private _membersCanCreateRepositories?: boolean | cdktn.IResolvable; 
  public get membersCanCreateRepositories() {
    return this.getBooleanAttribute('members_can_create_repositories');
  }
  public set membersCanCreateRepositories(value: boolean | cdktn.IResolvable) {
    this._membersCanCreateRepositories = value;
  }
  public resetMembersCanCreateRepositories() {
    this._membersCanCreateRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanCreateRepositoriesInput() {
    return this._membersCanCreateRepositories;
  }

  // members_can_fork_private_repositories - computed: false, optional: true, required: false
  private _membersCanForkPrivateRepositories?: boolean | cdktn.IResolvable; 
  public get membersCanForkPrivateRepositories() {
    return this.getBooleanAttribute('members_can_fork_private_repositories');
  }
  public set membersCanForkPrivateRepositories(value: boolean | cdktn.IResolvable) {
    this._membersCanForkPrivateRepositories = value;
  }
  public resetMembersCanForkPrivateRepositories() {
    this._membersCanForkPrivateRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanForkPrivateRepositoriesInput() {
    return this._membersCanForkPrivateRepositories;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secret_scanning_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _secretScanningEnabledForNewRepositories?: boolean | cdktn.IResolvable; 
  public get secretScanningEnabledForNewRepositories() {
    return this.getBooleanAttribute('secret_scanning_enabled_for_new_repositories');
  }
  public set secretScanningEnabledForNewRepositories(value: boolean | cdktn.IResolvable) {
    this._secretScanningEnabledForNewRepositories = value;
  }
  public resetSecretScanningEnabledForNewRepositories() {
    this._secretScanningEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScanningEnabledForNewRepositoriesInput() {
    return this._secretScanningEnabledForNewRepositories;
  }

  // secret_scanning_push_protection_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _secretScanningPushProtectionEnabledForNewRepositories?: boolean | cdktn.IResolvable; 
  public get secretScanningPushProtectionEnabledForNewRepositories() {
    return this.getBooleanAttribute('secret_scanning_push_protection_enabled_for_new_repositories');
  }
  public set secretScanningPushProtectionEnabledForNewRepositories(value: boolean | cdktn.IResolvable) {
    this._secretScanningPushProtectionEnabledForNewRepositories = value;
  }
  public resetSecretScanningPushProtectionEnabledForNewRepositories() {
    this._secretScanningPushProtectionEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScanningPushProtectionEnabledForNewRepositoriesInput() {
    return this._secretScanningPushProtectionEnabledForNewRepositories;
  }

  // twitter_username - computed: false, optional: true, required: false
  private _twitterUsername?: string; 
  public get twitterUsername() {
    return this.getStringAttribute('twitter_username');
  }
  public set twitterUsername(value: string) {
    this._twitterUsername = value;
  }
  public resetTwitterUsername() {
    this._twitterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterUsernameInput() {
    return this._twitterUsername;
  }

  // web_commit_signoff_required - computed: false, optional: true, required: false
  private _webCommitSignoffRequired?: boolean | cdktn.IResolvable; 
  public get webCommitSignoffRequired() {
    return this.getBooleanAttribute('web_commit_signoff_required');
  }
  public set webCommitSignoffRequired(value: boolean | cdktn.IResolvable) {
    this._webCommitSignoffRequired = value;
  }
  public resetWebCommitSignoffRequired() {
    this._webCommitSignoffRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCommitSignoffRequiredInput() {
    return this._webCommitSignoffRequired;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_security_enabled_for_new_repositories: cdktn.booleanToTerraform(this._advancedSecurityEnabledForNewRepositories),
      billing_email: cdktn.stringToTerraform(this._billingEmail),
      blog: cdktn.stringToTerraform(this._blog),
      company: cdktn.stringToTerraform(this._company),
      default_repository_permission: cdktn.stringToTerraform(this._defaultRepositoryPermission),
      dependabot_alerts_enabled_for_new_repositories: cdktn.booleanToTerraform(this._dependabotAlertsEnabledForNewRepositories),
      dependabot_security_updates_enabled_for_new_repositories: cdktn.booleanToTerraform(this._dependabotSecurityUpdatesEnabledForNewRepositories),
      dependency_graph_enabled_for_new_repositories: cdktn.booleanToTerraform(this._dependencyGraphEnabledForNewRepositories),
      description: cdktn.stringToTerraform(this._description),
      email: cdktn.stringToTerraform(this._email),
      has_organization_projects: cdktn.booleanToTerraform(this._hasOrganizationProjects),
      has_repository_projects: cdktn.booleanToTerraform(this._hasRepositoryProjects),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      members_can_create_internal_repositories: cdktn.booleanToTerraform(this._membersCanCreateInternalRepositories),
      members_can_create_pages: cdktn.booleanToTerraform(this._membersCanCreatePages),
      members_can_create_private_pages: cdktn.booleanToTerraform(this._membersCanCreatePrivatePages),
      members_can_create_private_repositories: cdktn.booleanToTerraform(this._membersCanCreatePrivateRepositories),
      members_can_create_public_pages: cdktn.booleanToTerraform(this._membersCanCreatePublicPages),
      members_can_create_public_repositories: cdktn.booleanToTerraform(this._membersCanCreatePublicRepositories),
      members_can_create_repositories: cdktn.booleanToTerraform(this._membersCanCreateRepositories),
      members_can_fork_private_repositories: cdktn.booleanToTerraform(this._membersCanForkPrivateRepositories),
      name: cdktn.stringToTerraform(this._name),
      secret_scanning_enabled_for_new_repositories: cdktn.booleanToTerraform(this._secretScanningEnabledForNewRepositories),
      secret_scanning_push_protection_enabled_for_new_repositories: cdktn.booleanToTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
      twitter_username: cdktn.stringToTerraform(this._twitterUsername),
      web_commit_signoff_required: cdktn.booleanToTerraform(this._webCommitSignoffRequired),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_security_enabled_for_new_repositories: {
        value: cdktn.booleanToHclTerraform(this._advancedSecurityEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_email: {
        value: cdktn.stringToHclTerraform(this._billingEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blog: {
        value: cdktn.stringToHclTerraform(this._blog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktn.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_repository_permission: {
        value: cdktn.stringToHclTerraform(this._defaultRepositoryPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependabot_alerts_enabled_for_new_repositories: {
        value: cdktn.booleanToHclTerraform(this._dependabotAlertsEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dependabot_security_updates_enabled_for_new_repositories: {
        value: cdktn.booleanToHclTerraform(this._dependabotSecurityUpdatesEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dependency_graph_enabled_for_new_repositories: {
        value: cdktn.booleanToHclTerraform(this._dependencyGraphEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktn.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_organization_projects: {
        value: cdktn.booleanToHclTerraform(this._hasOrganizationProjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_repository_projects: {
        value: cdktn.booleanToHclTerraform(this._hasRepositoryProjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members_can_create_internal_repositories: {
        value: cdktn.booleanToHclTerraform(this._membersCanCreateInternalRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_can_create_pages: {
        value: cdktn.booleanToHclTerraform(this._membersCanCreatePages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_can_create_private_pages: {
        value: cdktn.booleanToHclTerraform(this._membersCanCreatePrivatePages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_can_create_private_repositories: {
        value: cdktn.booleanToHclTerraform(this._membersCanCreatePrivateRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_can_create_public_pages: {
        value: cdktn.booleanToHclTerraform(this._membersCanCreatePublicPages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_can_create_public_repositories: {
        value: cdktn.booleanToHclTerraform(this._membersCanCreatePublicRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_can_create_repositories: {
        value: cdktn.booleanToHclTerraform(this._membersCanCreateRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_can_fork_private_repositories: {
        value: cdktn.booleanToHclTerraform(this._membersCanForkPrivateRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_scanning_enabled_for_new_repositories: {
        value: cdktn.booleanToHclTerraform(this._secretScanningEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_scanning_push_protection_enabled_for_new_repositories: {
        value: cdktn.booleanToHclTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      twitter_username: {
        value: cdktn.stringToHclTerraform(this._twitterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_commit_signoff_required: {
        value: cdktn.booleanToHclTerraform(this._webCommitSignoffRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
